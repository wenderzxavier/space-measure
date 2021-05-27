/* eslint-disable no-undef */
import React, { useState } from "react";
import { ReactComponent as FullEllipse } from "../assets/full-ellipse.svg";
import { ReactComponent as HalfEllipse } from "../assets/half-ellipse.svg";
import { ReactComponent as QuarterEllipse } from "../assets/quarter-ellipse.svg";
import { ReactComponent as FullTriangle } from "../assets/full-triangle.svg";
import { ReactComponent as FullRectangle } from "../assets/full-rectangle.svg";
import { ReactComponent as HalfTriangle } from "../assets/half-triangle.svg";
import { ReactComponent as Parallelogram } from "../assets/parallelogram.svg";
import {
  APP_ID,
  AVAILABLE_SHAPES,
  FULL,
  HALF,
  LINEAR,
  QUARTER,
  PIXEL_CONVERSION,
  SCALE_UNITS,
  SHAPE_ICONS,
  SQUARE,
} from "../utils/constants";
import { createShape } from "../widgetEvents/WidgetsCreated";
import { updateMiroShape } from "../widgetEvents/WidgetsUpdate";
import { getIdsFromWidgetsWithMetadata } from "../utils";
import { formatValue, getCurrentScale, getScaleUnit, setScale, setUnit } from "../utils/scale";

export const MetricUnitSelector = () => {
  const initialScaleUnit = getScaleUnit();
  const [selectedUnit, setSelectedUnit] = useState(initialScaleUnit || "m/m²");

  const handleChange = (evt) => {
    setSelectedUnit(() => evt.target.value);
    setUnit(evt.target.value);
  };

  return (
    <select value={selectedUnit} onChange={(evt) => handleChange(evt)} className="unit-selector">
      {SCALE_UNITS.map((unit, index) => (
        <option key={index} value={unit}>
          {unit}
        </option>
      ))}
    </select>
  );
};

export const MetricScaleSelector = () => {
  const initialScale = getCurrentScale();
  const [selectedScale, setSelectedScale] = useState(initialScale || "1px -> 1px");

  const handleChange = (evt) => {
    setSelectedScale(() => evt.target.value);
    setScale(evt.target.value);
  };

  return (
    <select value={selectedScale} onChange={(evt) => handleChange(evt)} className="scale-selector">
      <option disabled>Pixel Conversion</option>
      {PIXEL_CONVERSION.map((unit, index) => (
        <option key={index} value={unit}>
          {unit}
        </option>
      ))}
    </select>
  );
};

const formatWidgetsByGroup = async (widgetsIds) => {
  const widgets = await Promise.all(
    widgetsIds.map(async (widgetId) => {
      return (await miro.board.widgets.get({ id: widgetId }))[0];
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

export const WidgetCreationButtons = () => (
  <div className="widget-creation">
    <button onClick={() => createShape(FULL, AVAILABLE_SHAPES.ELLIPSE)}>
      <FullEllipse />
      Full Ellipse
    </button>
    <button onClick={() => createShape(HALF, AVAILABLE_SHAPES.ELLIPSE)}>
      <HalfEllipse />
      Half Ellipse
    </button>
    <button onClick={() => createShape(QUARTER, AVAILABLE_SHAPES.ELLIPSE)}>
      <QuarterEllipse />
      Quarter Ellipse
    </button>
    <button onClick={() => createShape(FULL, AVAILABLE_SHAPES.RECTANGLE)}>
      <FullRectangle />
      Full Quadrilateral
    </button>
    <button onClick={() => createShape(FULL, AVAILABLE_SHAPES.PARALLELOGRAM)}>
      <Parallelogram />
      Full Parallelogram
    </button>
    <button onClick={() => createShape(HALF, AVAILABLE_SHAPES.PARALLELOGRAM)}>
      <Parallelogram />
      Half Parallelogram
    </button>
    <button onClick={() => createShape(FULL, AVAILABLE_SHAPES.TRIANGLE)}>
      <FullTriangle />
      Full Triangle
    </button>
    <button onClick={() => createShape(HALF, AVAILABLE_SHAPES.TRIANGLE)}>
      <HalfTriangle />
      Half Triangle
    </button>
  </div>
);

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
    updateMiroShape(id, { ...widget, ...formattedMetadata });
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
            <input
              name={`metadata-${currentKey}`}
              type="text"
              value={edittedMetadata[currentKey].key}
              onChange={(evt) => handleKeyChange(evt, currentKey)}
            />
          </div>
          <div className="metadata-label-input">
            <label htmlFor={`metadata-${currentKey}-value`}>Value:</label>
            <input
              name={`metadata-${currentKey}-value`}
              type="text"
              value={edittedMetadata[currentKey].value}
              onChange={(evt) => handleValueChange(evt, currentKey)}
            />
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
            <input
              name={`metadata-entry${index}-value`}
              type="text"
              value={newEntry.value}
              onChange={(evt) => handleNewEntryValueChange(evt, index)}
            />
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
