/* eslint-disable no-undef */
import React, { useState } from "react";
import { ReactComponent as FullEllipse } from "../assets/full-ellipse.svg";
import { ReactComponent as HalfEllipse } from "../assets/half-ellipse.svg";
import { ReactComponent as QuarterEllipse } from "../assets/quarter-ellipse.svg";
import { ReactComponent as FullTriangle } from "../assets/full-triangle.svg";
import { ReactComponent as FullRectangle } from "../assets/full-rectangle.svg";
import { ReactComponent as HalfTriangle } from "../assets/half-triangle.svg";
import { ReactComponent as Parallelogram } from "../assets/parallelogram.svg";
import { APP_ID, AVAILABLE_SHAPES, FULL, HALF, QUARTER, SHAPE_ICONS } from "../utils/constants";
import { createShape } from "../widgetEvents/WidgetsCreated";
import { getIdsFromWidgetsWithMetadata } from "../utils";

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
      Create Full Ellipse
    </button>
    <button onClick={() => createShape(HALF, AVAILABLE_SHAPES.ELLIPSE)}>
      <HalfEllipse />
      Create Half Ellipse
    </button>
    <button onClick={() => createShape(QUARTER, AVAILABLE_SHAPES.ELLIPSE)}>
      <QuarterEllipse />
      Create Quarter Ellipse
    </button>
    <button onClick={() => createShape(FULL, AVAILABLE_SHAPES.RECTANGLE)}>
      <FullRectangle />
      Create Full Quadrilateral
    </button>
    <button onClick={() => createShape(FULL, AVAILABLE_SHAPES.PARALLELOGRAM)}>
      <Parallelogram />
      Create Full Parallelogram
    </button>
    <button onClick={() => createShape(HALF, AVAILABLE_SHAPES.PARALLELOGRAM)}>
      <Parallelogram />
      Create Half Parallelogram
    </button>
    <button onClick={() => createShape(FULL, AVAILABLE_SHAPES.TRIANGLE)}>
      <FullTriangle />
      Create Full Triangle
    </button>
    <button onClick={() => createShape(HALF, AVAILABLE_SHAPES.TRIANGLE)}>
      <HalfTriangle />
      Create Half Triangle
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

export const WidgetMetadataDisplay = ({}) => (
  <>
    <label htmlFor={`metadata-${metadataKey}`}>Key:</label>
    <input
      name={`metadata-${metadataKey}`}
      type="text"
      onChange={(evt) =>
        changeMetadata({
          [metadataKey]: {
            ...state.metadataKey,
            key: evt.target.value,
          },
        })
      }
      value={metadataKey}
    />
    <label htmlFor={`metadata-${metadataKey}-value`}>Value:</label>
    <input
      name={`metadata-${metadataKey}-value`}
      type="text"
      onChange={(evt) =>
        changeMetadata({
          [metadataKey]: {
            ...state.metadataKey,
            value: evt.target.value,
          },
        })
      }
      value={metadataValue}
    />
  </>
);

export const WidgetInformationDisplay = ({ widget }) => {
  const { id, shapeType, area, perimeter, length, count, ...metadata } = widget;

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

  const [newMetadata, setMetadata] = useState(initMetadataObj);
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

  console.log(metadata);

  return (
    <div>
      <h1>Shape: {SHAPE_ICONS[shapeType]}</h1>
      {area && <span>{`Area: ${area}`}</span>}
      {perimeter && <span>{`Perimeter: ${perimeter}`}</span>}
      {length && <span>{`Length: ${length}`}</span>}
      {count && (
        <>
          <label for="countShape">Counting Shape:</label>
          <input type="checkbox" id="countShape" name="countShape" checked disabled />
        </>
      )}
      {Object.keys(newMetadata).map((currentKey, index) => (
        <div key={index}>
          <label htmlFor={`metadata-${currentKey}`}>Key:</label>
          <input
            name={`metadata-${currentKey}`}
            type="text"
            value={newMetadata[currentKey].key}
            onChange={(evt) => handleKeyChange(evt, currentKey)}
          />
          <label htmlFor={`metadata-${currentKey}-value`}>Value:</label>
          <input
            name={`metadata-${currentKey}-value`}
            type="text"
            value={newMetadata[currentKey].value}
            onChange={(evt) => handleValueChange(evt, currentKey)}
          />
        </div>
      ))}
      <button disabled={isChanged ? false : true}>Update Metadata</button>
    </div>
  );
};

const SelectWidgetsPanel = ({ widgetsInfo }) => {
  const groupIds = Object.keys(widgetsInfo).filter((item) => item !== "ungrouped");

  console.log(widgetsInfo);

  return (
    <div>
      <div style={{ "max-height": "500px", overflow: "scroll" }}>
        <span>Grouped</span>
        {groupIds.map((groupId, index) => (
          <div key={index}>
            <h1>{`Group: ${groupId}`}</h1>
            {widgetsInfo[groupId].area && <span>{`Area: ${widgetsInfo[groupId].area}`}</span>}
            {widgetsInfo[groupId].perimeter && <span>{`Perimeter: ${widgetsInfo[groupId].perimeter}`}</span>}
            {widgetsInfo[groupId].length && <span>{`Length: ${widgetsInfo[groupId].length}`}</span>}
            <div>Widgets:</div>
            {widgetsInfo[groupId].widgets.map((widget, widgetKey) => (
              <WidgetInformationDisplay key={widgetKey} widget={widget} />
            ))}
          </div>
        ))}
      </div>
      <div>
        <span>Ungrouped</span>
        {widgetsInfo["ungrouped"].map((widget, index) => (
          <WidgetInformationDisplay key={index} widget={widget} />
        ))}
      </div>
    </div>
  );
};

export default SelectWidgetsPanel;
