import { calculateAreaForShape, calculatePerimeterForShape } from "../calcs";
import {
  APP_ID,
  AVAILABLE_SHAPES,
  SHAPE,
  FULL,
  SHAPE_NAME,
} from "../constants";

const WIDTH = 200;
const HEIGHT = 200;

/* eslint-disable no-undef */
export const createShape = async (
  areaType = FULL,
  shape = AVAILABLE_SHAPES.RECTANGLE
) => {
  const boardCenter = await miro.board.viewport.get();
  const positionX = boardCenter.x + boardCenter.width / 2;
  const positionY = boardCenter.y + boardCenter.height / 2;
  miro.board.widgets.create({
    type: SHAPE,
    text: `${areaType.charAt(0).toUpperCase() + areaType.slice(1)} ${
      SHAPE_NAME[shape]
    }`,
    height: HEIGHT,
    width: WIDTH,
    metadata: {
      [APP_ID]: {
        area: calculateAreaForShape(shape, WIDTH, HEIGHT, areaType),
        perimeter: calculatePerimeterForShape(shape, WIDTH, HEIGHT, areaType),
        areaType: areaType,
      },
    },
    style: {
      shapeType: shape,
    },
    x: positionX,
    y: positionY,
  });

  miro.board.viewport.get({
    viewport: { x: positionX, y: positionY },
  });
};
