/* eslint-disable no-undef */
import { AVAILABLE_SHAPES, HALF, QUARTER } from "./constants";

const parallelogramArea = (width, height) => width * height;

const parallelogramPerimeter = (width, height) => width * 2 + height * 2;

const squareArea = (width, height) => width * height;

const squarePerimeter = (width, height) => width * 2 + height * 2;

const ellipseArea = (horizontalDiameter, verticalDiameter, areaType) => {
  const verticalRadius = verticalDiameter / 2;
  const horizontalRadius = horizontalDiameter / 2;

  const area = Math.PI * verticalRadius * horizontalRadius;

  if (areaType.toLowerCase() === QUARTER) return area / 4;

  if (areaType.toLowerCase() === HALF) return area / 2;

  return area;
};

const ellipsePerimeter = (horizontalDiameter, verticalDiameter, areaType) => {
  const verticalRadius = verticalDiameter / 2;
  const horizontalRadius = horizontalDiameter / 2;

  const perimeter =
    Math.PI *
    (3 * (horizontalRadius + verticalRadius) -
      Math.sqrt(
        (3 * horizontalRadius + verticalRadius) *
          (horizontalRadius + 3 * verticalRadius)
      ));

  if (areaType.toLowerCase() === QUARTER) return perimeter / 4;

  if (areaType.toLowerCase() === HALF) return perimeter / 2;

  return perimeter;
};

const triangleArea = (base, height, areaType) => {
  const area = (base * height) / 2;

  if (areaType.toLowerCase() === HALF) return area / 2;

  return area;
};

const trianglePerimeter = (base, height, areaType) => {
  const perimeter =
    base + Math.sqrt(Math.pow(base, 2) + 4 * Math.pow(height, 2));

  if (areaType.toLowerCase() === HALF) return perimeter / 2;

  return perimeter;
};

export const updateShapeMetadata = async (widgetId) => {
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

export const calculateAreaForShape = (shape, width, height, areaType) => {
  switch (shape) {
    case AVAILABLE_SHAPES.RECTANGLE:
      return parallelogramArea();
    case AVAILABLE_SHAPES.TRIANGLE:
      return triangleArea(areaType);
    case AVAILABLE_SHAPES.CIRCLE:
      return ellipseArea(areaType);
    case AVAILABLE_SHAPES.PARALLELOGRAM:
      return parallelogramArea(areaType);
    default:
      return undefined;
  }
};
export const calculatePerimeterForShape = (shape, areaType) => {};
