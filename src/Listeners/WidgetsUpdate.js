/* eslint-disable no-undef */
import {
  AVAILABLE_SHAPES,
  APP_ID,
  FULL,
  AVAILABLE_AREA_TYPES,
} from "../constants";
import {
  calculateAreaForShape,
  calculateLength,
  calculatePerimeterForShape,
} from "../calcs";

export const LOCAL_SHAPES = [];
export const LOCAL_LINES = [];
export const LOCAL_GROUPS = [];

const updateMiroShape = (id, metadata) => {
  miro.board.widgets.update({
    id,
    metadata: {
      [APP_ID]: {
        ...metadata,
      },
    },
  });
};

const updateLocalShapes = (widget, areaType, area, perimeter) =>
  LOCAL_SHAPES.push({
    id: widget.id,
    areaType,
    area,
    perimeter,
    width: widget.width,
    height: widget.height,
    groupId: widget.groupId,
    shapeType: widget.style.shapeType,
  });

export const updateShapesAreaPerimeter = (widgets) => {
  LOCAL_SHAPES.splice(0, LOCAL_SHAPES.length);
  widgets.forEach((widget) => {
    let areaType = widget.metadata[APP_ID]?.areaType || FULL;
    let area = widget.metadata[APP_ID]?.area || 0;
    let perimeter = widget.metadata[APP_ID]?.perimeter || 0;

    if (!AVAILABLE_AREA_TYPES.includes(areaType)) {
      areaType = FULL;
    }

    if (Object.values(AVAILABLE_SHAPES).includes(widget.style.shapeType)) {
      const calculatedArea = calculateAreaForShape(
        widget.style.shapeType,
        widget.width,
        widget.height,
        areaType
      );

      const calculatedPerimeter = calculatePerimeterForShape(
        widget.style.shapeType,
        widget.width,
        widget.height,
        areaType
      );

      updateLocalShapes(widget, areaType, calculatedArea, calculatedPerimeter);

      console.log(LOCAL_SHAPES);

      if (
        area !== calculatedArea ||
        perimeter !== calculatedPerimeter ||
        widget.metadata[APP_ID].areaType !== areaType
      ) {
        updateMiroShape(widget.id, {
          calculatedArea,
          calculatedPerimeter,
          areaType,
        });
      }
    }
  });
};

export const updateLinesLengths = (widgets) => {
  LOCAL_LINES.splice(0, LOCAL_LINES.length);

  widgets.forEach((widget) => {
    let length = widget.metadata[APP_ID]?.length || 0;

    const { startPosition, endPosition } = widget;

    const calculatedLength = calculateLength(
      startPosition.x,
      startPosition.y,
      endPosition.x,
      endPosition.y
    );

    if (calculatedLength !== length) {
      updateMiroShape(widget.id, { length: calculatedLength });
    }
  });
};
