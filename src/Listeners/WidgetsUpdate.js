/* eslint-disable no-undef */
import {
  APP_ID,
  FULL,
  AVAILABLE_AREA_TYPES,
} from "../constants";
import {
  calculateAreaForShape,
  calculateLength,
  calculatePerimeterForShape,
} from "../calcs";
import { isShapeAvailable } from "../utils";

// export const LOCAL_SHAPES = [];
// export const LOCAL_LINES = [];
// export const LOCAL_GROUPS = [];

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

// const updateLocalShapes = (widget, areaType, area, perimeter) =>
//   LOCAL_SHAPES.push({
//     id: widget.id,
//     areaType,
//     area,
//     perimeter,
//     width: widget.width,
//     height: widget.height,
//     groupId: widget.groupId,
//     shapeType: widget.style.shapeType,
//   });

export const updateShapesAreaPerimeter = (widgets) => {
  widgets.forEach((widget) => {
    let areaType = widget.metadata[APP_ID]?.areaType || FULL;
    let area = widget.metadata[APP_ID]?.area || 0;
    let perimeter = widget.metadata[APP_ID]?.perimeter || 0;
    let shapeType = widget.style.shapeType || undefined;

    if (!AVAILABLE_AREA_TYPES.includes(areaType)) {
      areaType = FULL;
    }

    if (isShapeAvailable(shapeType)) {
      const calculatedArea = calculateAreaForShape(
        shapeType,
        widget.width,
        widget.height,
        areaType
      );

      const calculatedPerimeter = calculatePerimeterForShape(
        shapeType,
        widget.width,
        widget.height,
        areaType
      );

      // updateLocalShapes(widget, areaType, calculatedArea, calculatedPerimeter);

      if (
        area !== calculatedArea ||
        perimeter !== calculatedPerimeter ||
        widget.metadata[APP_ID].areaType !== areaType
      ) {
        updateMiroShape(widget.id, {
          area: calculatedArea,
          perimeter: calculatedPerimeter,
          areaType,
          shapeType
        });
      }
    }
  });
};

export const updateLinesLengths = (widgets) => {
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
