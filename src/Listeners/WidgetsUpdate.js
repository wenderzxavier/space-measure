import { AVAILABLE_SHAPES, APP_ID } from "../constants";
import { calculateAreaForShape, calculatePerimeterForShape } from "../calcs";

export let SHAPES = [];
export let LINES = [];
export let GROUPS = [];

export const updateShapes = (widgets) => {
  SHAPES = [];
  widgets.forEach((widget) => {
    let differentArea = "full";

    if (widget.metadata[APP_ID]?.areaType) {
      differentArea = widget.metadata[APP_ID].areaType;
    }

    if (Object.values(AVAILABLE_SHAPES).includes(widget.style.shapeType))
      SHAPES.push({
        id: widget.id,
        metadata: {
          [APP_ID]: {
            ...widget.metadata[APP_ID],
            area: calculateAreaForShape(widget.style.shapeType, differentArea),
            perimeter: calculatePerimeterForShape(widget.style.shapeType, differentArea),
            areaType: differentArea
          },
        },
      });
  });
};
