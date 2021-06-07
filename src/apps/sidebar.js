/* eslint-disable no-undef */
import React, { useState } from "react";
import { APP_ID, LINEAR, SHAPE_ICONS, SQUARE } from "../utils/constants";
import { getIdsFromWidgetsWithMetadata } from "../utils";
import { formatValue } from "../utils/scale";
import { getMiroWidgets, updateMiroWidget } from "../utils/miro.functions";

const formatWidgetsByGroup = async (widgetsIds) => {
  const widgets = await Promise.all(
    widgetsIds.map(async (widgetId) => {
      return getMiroWidgets({ id: widgetId })[0];
    })
  );

  return widgets.reduce(
    (accumulated, currentWidget) => {
      if (currentWidget && currentWidget.groupId) {
        const accumulatedArea = accumulated[currentWidget.groupId]?.area || 0;
        const accumulatedPerimeter = accumulated[currentWidget.groupId]?.perimeter || 0;
        const accumulatedLength = accumulated[currentWidget.groupId]?.length || 0;
        const accumulatedWidgets = accumulated[currentWidget.groupId]?.widgets || [];
        return {
          ...accumulated,
          [currentWidget.groupId]: {
            area: accumulatedArea + currentWidget.metadata[APP_ID].area,
            perimeter: accumulatedPerimeter + currentWidget.metadata[APP_ID].perimeter,
            length: accumulatedLength + currentWidget.metadata[APP_ID].length,
            widgets: [...accumulatedWidgets, { id: currentWidget.id, ...currentWidget.metadata[APP_ID] }],
          },
        };
      } else {
        return {
          ...accumulated,
          ungrouped: [...accumulated.ungrouped, { id: currentWidget.id, ...currentWidget.metadata[APP_ID] }],
        };
      }
    },
    { ungrouped: [] }
  );
};

export const updateSelectedWidgets = (widgets) => {
  try {
    const widgetsIds = getIdsFromWidgetsWithMetadata(widgets);

    return formatWidgetsByGroup(widgetsIds);
  } catch {
    console.warn("An error occurred");
  }
};

const fomatMetadataToUpdate = (edittedEntries, newEntries) => {
  const formatEdittedEntries = Object.values(edittedEntries).reduce((accumulated, currentValue) => {
    return {
      ...accumulated,
      [currentValue.key]: currentValue.value,
    };
  }, {});

  const formatNewEntries = newEntries.reduce((accumulated, currentValue) => {
    return {
      ...accumulated,
      [currentValue.key]: currentValue.value,
    };
  }, {});

  return { ...formatEdittedEntries, ...formatNewEntries };
};

export const WidgetInformationDisplay = ({ widget }) => {
  const { id, shapeType, areaType, area, perimeter, length, count, ...metadata } = widget;

  const initMetadataObj = Object.keys(metadata).reduce(
    (accumulator, currentKey) => ({
      ...accumulator,
      [currentKey]: {
        key: currentKey,
        value: metadata[currentKey],
      },
    }),
    {}
  );

  const [edittedMetadata, setMetadata] = useState(initMetadataObj);
  const [newMetadataEntry, updateNewMetadataEntries] = useState([]);
  const [isChanged, setIsChanged] = useState(false);

  const handleKeyChange = (evt, metadataKey) => {
    setIsChanged(true);
    setMetadata((state) => ({
      ...state,
      [metadataKey]: {
        ...state[metadataKey],
        key: evt.target.value,
      },
    }));
  };

  const handleValueChange = (evt, metadataKey) => {
    setIsChanged(true);
    setMetadata((state) => ({
      ...state,
      [metadataKey]: {
        ...state[metadataKey],
        value: evt.target.value,
      },
    }));
  };

  const handleNewEntryKeyChange = (evt, index) => {
    setIsChanged(true);

    updateNewMetadataEntries((entries) => [
      ...entries.slice(0, index),
      {
        ...entries[index],
        key: evt.target.value,
      },
      ...entries.slice(index + 1),
    ]);
  };

  const handleNewEntryValueChange = (evt, index) => {
    setIsChanged(true);

    updateNewMetadataEntries((entries) => [
      ...entries.slice(0, index),
      {
        ...entries[index],
        value: evt.target.value,
      },
      ...entries.slice(index + 1),
    ]);
  };

  const updateMetadata = () => {
    const formattedMetadata = fomatMetadataToUpdate(edittedMetadata, newMetadataEntry);
    updateMiroWidget(id, { ...widget, ...formattedMetadata });
  };

  return (
    <div className="shape-wrapper">
      {shapeType && <span className="widget-shape">Shape: {SHAPE_ICONS[shapeType]}</span>}
      {area && (
        <div className="shape-label">
          Area: <span className="shape-value">{formatValue(area, SQUARE)}</span>
        </div>
      )}
      {perimeter && (
        <div className="shape-label">
          Perimeter: <span className="shape-value">{formatValue(perimeter, LINEAR)}</span>
        </div>
      )}
      {length && (
        <div className="shape-label">
          Length: <span className="shape-value">{formatValue(length, LINEAR)}</span>
        </div>
      )}
      {count && (
        <>
          <label for="countShape">Counting Shape:</label>
          <input type="checkbox" id="countShape" name="countShape" checked disabled />
        </>
      )}
      {areaType && (
        <div className="metadata-keyvalue">
          <div className="metadata-label-input">
            <label htmlFor="areaType">Key:</label>
            <input name="areaType" type="text" value="areaType" disabled />
          </div>
          <div className="metadata-label-input">
            <label htmlFor="areaTypeValue">Value:</label>
            <input name="areaTypeValue" type="text" value={areaType} disabled />
          </div>
        </div>
      )}
      {Object.keys(edittedMetadata).map((currentKey, index) => (
        <div className="metadata-keyvalue" key={index}>
          <div className="metadata-label-input">
            <label htmlFor={`metadata-${currentKey}`}>Key:</label>
            <input name={`metadata-${currentKey}`} type="text" value={edittedMetadata[currentKey].key} onChange={(evt) => handleKeyChange(evt, currentKey)} />
          </div>
          <div className="metadata-label-input">
            <label htmlFor={`metadata-${currentKey}-value`}>Value:</label>
            <input name={`metadata-${currentKey}-value`} type="text" value={edittedMetadata[currentKey].value} onChange={(evt) => handleValueChange(evt, currentKey)} />
          </div>
        </div>
      ))}
      {newMetadataEntry.map((newEntry, index) => (
        <div className="metadata-keyvalue" key={index}>
          <div className="metadata-label-input">
            <label htmlFor={`metadata-entry${index}`}>Key:</label>
            <input name={`metadata-entry-${index}`} type="text" value={newEntry.key} onChange={(evt) => handleNewEntryKeyChange(evt, index)} />
          </div>
          <div className="metadata-label-input">
            <label htmlFor={`metadata-entry${index}-value`}>Value:</label>
            <input name={`metadata-entry${index}-value`} type="text" value={newEntry.value} onChange={(evt) => handleNewEntryValueChange(evt, index)} />
          </div>
          <button onClick={() => updateNewMetadataEntries((entries) => [...entries.slice(0, index), ...entries.slice(index + 1)])}>Remove</button>
        </div>
      ))}
      <div className="new-entry-btn">
        <button onClick={() => updateNewMetadataEntries((entries) => [...entries, { key: "", value: "" }])}>+</button>
      </div>
      <div className="update-metadata-btn">
        <button disabled={isChanged ? false : true} onClick={() => updateMetadata()}>
          Update Metadata
        </button>
      </div>
    </div>
  );
};

const SelectWidgetsPanel = ({ widgetsInfo }) => {
  const groupIds = Object.keys(widgetsInfo).filter((item) => item !== "ungrouped");

  return (
    <div className="selected-widgets-wrapper">
      {groupIds.map((groupId, index) => (
        // <div className="widget-info-group">
        <div className="group-wrapper" key={index}>
          <h5>{`Group: ${groupId}`}</h5>
          {!Number.isNaN(widgetsInfo[groupId].area) && (
            <div className="metadata-value">
              Area:<span>{formatValue(widgetsInfo[groupId].area, SQUARE)}</span>
            </div>
          )}
          {!Number.isNaN(widgetsInfo[groupId].perimeter) && (
            <div className="metadata-value">
              Perimeter: <span>{formatValue(widgetsInfo[groupId].perimeter, LINEAR)}</span>
            </div>
          )}
          {!Number.isNaN(widgetsInfo[groupId].length) && (
            <div className="metadata-value">
              Length: <span>{formatValue(widgetsInfo[groupId].length, LINEAR)}</span>
            </div>
          )}
          <hr className="section-divider" />
          {widgetsInfo[groupId].widgets.map((widget, widgetKey) => (
            <WidgetInformationDisplay key={widgetKey} widget={widget} />
          ))}
        </div>
        // </div>
      ))}
      <div className="group-wrapper">
        {widgetsInfo["ungrouped"].map((widget, index) => (
          <WidgetInformationDisplay key={index} widget={widget} />
        ))}
      </div>
    </div>
  );
};

export default SelectWidgetsPanel;
