/* eslint-disable no-undef */
import { AVAILABLE_SHAPES, APP_ID } from "../constants";
import { calculateAreaForShape, calculatePerimeterForShape } from "../calcs";

export let SHAPES = [];
export let LINES = [];
export let GROUPS = [];

const updateShapeAreas = async (widgetId, shapeType) => {
  const widget = await miro.board.widgets.get({ id: widgetId });
  miro.board.widgets.update({
    id: widget[0].id,
    metadata: {
      "3074457358398558776": {
        area: squareArea(widget[0].width, widget[0].height),
        perimeter: squarePerimeter(widget[0].width, widget[0].height),
      },
    },
  });
};

export const updateLocalShapes = (widgets) => {
  SHAPES = [];

  widgets.forEach((widget) => {
    const { area, perimeter, areaType } = widget.metadata[APP_ID];

    const updateParameters = {};

    if (!area || !perimeter) {
      updateParameters.updateArea = true;

      if (!areaType) {
        updateParameters.areaType = "full";
      } else updateParameters.areaType = areaType;

      updateShapeAreas(widget.id, widget.style.shapeType);
    }

    SHAPES.push({
      id: widget.id,
      width: widget.width,
      height: widget.height,
      area,
      perimeter,
      areaType,
      groupId: widget.groupId,
      shapeType: widget.style.shapeType,
    });
  });
};

export const updateShapesAreaPerimeter = (widgets) => {
  SHAPES = [];
  widgets.forEach((widget) => {
    let differentArea = "full";

    if (widget.metadata[APP_ID]?.areaType) {
      differentArea = widget.metadata[APP_ID].areaType;
    }

    if (Object.values(AVAILABLE_SHAPES).includes(widget.style.shapeType))
      SHAPES.push({
        id: widget.id,
        area: calculateAreaForShape(
          widget.style.shapeType,
          widget.width,
          widget.height,
          differentArea
        ),
        perimeter: calculatePerimeterForShape(
          widget.style.shapeType,
          widget.width,
          widget.height,
          differentArea
        ),
        width: widget.width,
        height: widget.height,
        groupId: widget.groupId,
        shapeType: widget.style.shapeType,
      });
  });
};
