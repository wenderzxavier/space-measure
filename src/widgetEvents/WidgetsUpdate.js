/* eslint-disable no-undef */
import { APP_ID, FULL, AVAILABLE_AREA_TYPES } from "../utils/constants";
import { calculateAreaForShape, calculateLength, calculatePerimeterForShape } from "../utils/calcs";
import { isShapeAvailable } from "../utils";

export const updateMiroShape = async (id, metadata) => {
  await miro.board.widgets.update({
    id,
    metadata: {
      [APP_ID]: {
        ...metadata,
      },
    },
  });
};

export const updateShapesAreaPerimeter = (widgets) => {
  widgets.forEach((widget) => {
    console.log(widget);
    let shapeType = widget.style.shapeType || undefined;

    if (isShapeAvailable(shapeType)) {
      let areaType = widget.metadata[APP_ID]?.areaType || FULL;
      let area = widget.metadata[APP_ID]?.area || 0;
      let perimeter = widget.metadata[APP_ID]?.perimeter || 0;

      if (!AVAILABLE_AREA_TYPES.includes(areaType)) {
        areaType = FULL;
      }

      const calculatedArea = calculateAreaForShape(shapeType, widget.width, widget.height, areaType);

      const calculatedPerimeter = calculatePerimeterForShape(shapeType, widget.width, widget.height, areaType);

      if (area !== calculatedArea || perimeter !== calculatedPerimeter || widget.metadata[APP_ID].areaType !== areaType) {
        console.log("TA ATUALIZANDO O WIDGET");
        console.log(widget.metadata[APP_ID]);
        updateMiroShape(widget.id, {
          test: "updateShapeArea",
          area: calculatedArea,
          perimeter: calculatedPerimeter,
          areaType,
          shapeType,
        });
      }
    } else {
      if (!widget.metadata[APP_ID]) {
        updateMiroShape(widget.id, {
          test: "updateShapeArea",
          count: true,
          shapeType,
        });
      }
    }
  });
};

export const updateLinesLengths = (widgets) => {
  widgets.forEach((widget) => {
    let length = widget.metadata[APP_ID]?.length || 0;

    const { startPosition, endPosition } = widget;

    const calculatedLength = calculateLength(startPosition.x, startPosition.y, endPosition.x, endPosition.y);

    if (calculatedLength !== length) {
      updateMiroShape(widget.id, { length: calculatedLength });
    }
  });
};
