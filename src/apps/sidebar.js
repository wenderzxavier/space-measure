/* eslint-disable no-undef */
import React from "react";
import { ReactComponent as FullEllipse } from "../assets/full-ellipse.svg";
import { ReactComponent as HalfEllipse } from "../assets/half-ellipse.svg";
import { ReactComponent as QuarterEllipse } from "../assets/quarter-ellipse.svg";
import { ReactComponent as FullTriangle } from "../assets/full-triangle.svg";
import { ReactComponent as FullRectangle } from "../assets/full-rectangle.svg";
import { ReactComponent as HalfTriangle } from "../assets/half-triangle.svg";
import { ReactComponent as Parallelogram } from "../assets/parallelogram.svg";
import { APP_ID, AVAILABLE_SHAPES, FULL, HALF, QUARTER } from "../utils/constants";
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

export const WidgetMetadataDisplay = (widget) => {
  const { id, shapeType, ...metadata } = widget;

  return <div></div>;
};

const SelectWidgetsPanel = ({ widgetsInfo }) => {
  const groupIds = Object.keys(widgetsInfo).filter((item) => item !== "ungrouped");

  console.log(widgetsInfo);

  return (
    <div>
      <div>
        <span>Grouped</span>
        {groupIds.map((groupId, index) => (
          <div key={index}>
            <h1>{`Group: ${groupId}`}</h1>
            {widgetsInfo[groupId].area && <h4>{`Area: ${widgetsInfo[groupId].area}`}</h4>}
            {widgetsInfo[groupId].perimeter && <h4>{`Perimeter: ${widgetsInfo[groupId].perimeter}`}</h4>}
            {widgetsInfo[groupId].length && <h4>{`Length: ${widgetsInfo[groupId].length}`}</h4>}
            <div>Widgets:</div>
            {widgetsInfo[groupId].widgets.map((widget, widgetKey) => (
              <div key={widgetKey}>
                <h1>{widget.id}</h1>
                <h4>{`Area: ${widget.area}`}</h4>
                <h4>{`Perimeter: ${widget.perimeter}`}</h4>
                <h4>{`Length: ${widget.length}`}</h4>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div>
        <span>Ungrouped</span>
        {widgetsInfo["ungrouped"].map((entry, index) => (
          <div key={index}>
            <h1>{entry.id}</h1>
            <h4>{`Area: ${entry.area}`}</h4>
            <h4>{`Perimeter: ${entry.perimeter}`}</h4>
            <h4>{`Length: ${entry.length}`}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectWidgetsPanel;
