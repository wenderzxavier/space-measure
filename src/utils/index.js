import { AVAILABLE_SHAPES } from "./constants";

export const isShapeAvailable = (shape) =>
  Object.values(AVAILABLE_SHAPES).includes(shape);
