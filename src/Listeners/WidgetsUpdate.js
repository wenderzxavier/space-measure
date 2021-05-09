/* eslint-disable no-undef */
import {
  AVAILABLE_SHAPES,
  APP_ID,
  FULL,
  AVAILABLE_AREA_TYPES,
} from "../constants";
import { calculateAreaForShape, calculatePerimeterForShape } from "../calcs";
import { LOCAL_SHAPES } from "..";

const updateMiroShape = (id, area, perimeter, areaType) => {
  miro.board.widgets.update({
    id,
    metadata: {
      [APP_ID]: {
        area,
        perimeter,
        areaType,
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
        updateMiroShape(
          widget.id,
          calculatedArea,
          calculatedPerimeter,
          areaType
        );
      }
    }
  });
};
