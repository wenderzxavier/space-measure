/* eslint-disable no-undef */
import { AVAILABLE_SHAPES, HALF, QUARTER } from "./constants";
import { applyScale } from "./scale";

const parallelogramArea = (width, height) => width * height;

const parallelogramPerimeter = (width, height) => width * 2 + height * 2;

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

  const perimeter = Math.PI * (3 * (horizontalRadius + verticalRadius) - Math.sqrt((3 * horizontalRadius + verticalRadius) * (horizontalRadius + 3 * verticalRadius)));

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
  const perimeter = base + Math.sqrt(Math.pow(base, 2) + 4 * Math.pow(height, 2));

  if (areaType.toLowerCase() === HALF) return perimeter / 2;

  return perimeter;
};

export const calculateLength = (x1, y1, x2, y2) => applyScale(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));

// Check
export const calculateAreaForShape = ({ shapeType, width, height, areaType }) => {
  const newWidth = applyScale(width);
  const newHeight = applyScale(height);

  switch (shapeType) {
    case AVAILABLE_SHAPES.RECTANGLE:
      return parallelogramArea(newWidth, newHeight);
    case AVAILABLE_SHAPES.TRIANGLE:
      return triangleArea(newWidth, newHeight, areaType);
    case AVAILABLE_SHAPES.ELLIPSE:
      return ellipseArea(newWidth, newHeight, areaType);
    case AVAILABLE_SHAPES.PARALLELOGRAM:
      return parallelogramArea(newWidth, newHeight);
    default:
      return 0;
  }
};

export const calculatePerimeterForShape = ({ shape, width, height, areaType }) => {
  const newWidth = applyScale(width);
  const newHeight = applyScale(height);

  switch (shape) {
    case AVAILABLE_SHAPES.RECTANGLE:
      return parallelogramPerimeter(newWidth, newHeight);
    case AVAILABLE_SHAPES.TRIANGLE:
      return trianglePerimeter(newWidth, newHeight, areaType);
    case AVAILABLE_SHAPES.ELLIPSE:
      return ellipsePerimeter(newWidth, newHeight, areaType);
    case AVAILABLE_SHAPES.PARALLELOGRAM:
      return parallelogramPerimeter(newWidth, newHeight);
    default:
      return undefined;
  }
};
