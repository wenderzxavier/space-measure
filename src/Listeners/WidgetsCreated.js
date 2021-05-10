import { calculateAreaForShape, calculatePerimeterForShape } from "../calcs";
import { APP_ID, AVAILABLE_SHAPES, SHAPE, FULL } from "../constants";

const WIDTH = 100;
const HEIGHT = 100;

/* eslint-disable no-undef */
export const createFullEllipse = () => {
  miro.board.widgets.create({
    type: SHAPE,
    text: "Full Ellipse",
    height: HEIGHT,
    width: WIDTH,
    metadata: {
      [APP_ID]: {
        area: calculateAreaForShape(
          AVAILABLE_SHAPES.ELLIPSE,
          WIDTH,
          HEIGHT,
          FULL
        ),
        perimeter: calculatePerimeterForShape(
          AVAILABLE_SHAPES.ELLIPSE,
          WIDTH,
          HEIGHT,
          FULL
        ),
      },
    },
    style: {
      shapeType: AVAILABLE_SHAPES.ELLIPSE,
    },
  });
};
