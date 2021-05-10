import { calculateAreaForShape, calculatePerimeterForShape } from "../calcs";
import { APP_ID, AVAILABLE_SHAPES, SHAPE, FULL } from "../constants";

const WIDTH = 100;
const HEIGHT = 100;

/* eslint-disable no-undef */
export const createEllipse = async (areaType = FULL) => {
  const boardCenter = await miro.board.viewport.get();
  const createdWidget = miro.board.widgets.create({
    type: SHAPE,
    text: `${areaType.charAt(0).toUpperCase() + areaType.slice(1)} Ellipse`,
    height: HEIGHT,
    width: WIDTH,
    metadata: {
      [APP_ID]: {
        area: calculateAreaForShape(
          AVAILABLE_SHAPES.ELLIPSE,
          WIDTH,
          HEIGHT,
          areaType
        ),
        perimeter: calculatePerimeterForShape(
          AVAILABLE_SHAPES.ELLIPSE,
          WIDTH,
          HEIGHT,
          areaType
        ),
        areaType: areaType,
      },
    },
    style: {
      shapeType: AVAILABLE_SHAPES.ELLIPSE,
    },
    x: boardCenter.x + boardCenter.width / 2,
    y: boardCenter.y + boardCenter.height / 2,
  })[0];

  miro.board.viewport.zoomToObject(createdWidget);
};
