import { APP_ID, FULL, AVAILABLE_AREA_TYPES } from "../utils/constants";
import { calculateLength } from "../utils/calcs";
import { isShapeAvailable } from "../utils";
import { updateMiroWidget } from "../utils/miro.functions";

// Check
export const updateShapesWidthHeight = (widgets) => {
  widgets.forEach((widget) => {
    let shapeType = widget.style.shapeType || undefined;

    if (isShapeAvailable(shapeType)) {
      let areaType = widget.metadata[APP_ID]?.areaType || FULL;
      let metadataWidth = widget.metadata[APP_ID]?.width || 0;
      let metadataHeight = widget.metadata[APP_ID]?.height || 0;

      if (!AVAILABLE_AREA_TYPES.includes(areaType)) {
        areaType = FULL;
      }

      const currentWidth = widget.width;
      const currentHeight = widget.height;

      if (metadataWidth !== currentWidth || metadataHeight !== currentHeight || widget.metadata[APP_ID].areaType !== areaType) {
        updateMiroWidget(widget.id, {
          width: currentWidth,
          height: currentHeight,
          areaType,
          shapeType,
        });
      }
    } else {
      if (!widget.metadata[APP_ID]) {
        updateMiroWidget(widget.id, {
          count: true,
          shapeType,
        });
      }
    }
  });
};

// Check
export const updateLinesLengths = (widgets) => {
  widgets.forEach((widget) => {
    let length = widget.metadata[APP_ID]?.length || 0;

    const { startPosition, endPosition } = widget;

    const calculatedLength = calculateLength(startPosition.x, startPosition.y, endPosition.x, endPosition.y);

    if (calculatedLength !== length) {
      updateMiroWidget(widget.id, { length: calculatedLength });
    }
  });
};
