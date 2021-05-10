/* eslint-disable no-undef */
import {
  calculateAreaForShape,
  calculateLength,
  calculatePerimeterForShape,
} from "../calcs";
import {
  APP_ID,
  AVAILABLE_SHAPES,
  LINE,
  SHAPE,
  FULL,
  SHAPE_NAME,
} from "../constants";

const WIDTH = 200;
const HEIGHT = 200;

const addMetadataToShape = async (widgetId) => {
  const widget = (await miro.board.widgets.get({ id: widgetId }))[0];
  if (Object.values(AVAILABLE_SHAPES).includes(widget.style.shapeType)) {
    const area = calculateAreaForShape(
      widget.style.shapeType,
      widget.width,
      widget.height,
      FULL
    );

    const perimeter = calculatePerimeterForShape(
      widget.style.shapeType,
      widget.width,
      widget.height,
      FULL
    );

    miro.board.widgets.update({
      id: widget.id,
      metadata: {
        [APP_ID]: {
          area,
          perimeter,
          areaType: FULL,
        },
      },
    });
  } else {
    miro.showErrorNotification("Shape not supported for SpaceMeasure");
  }
};

const addMetadataToLine = async (widgetId) => {
  const widget = (await miro.board.widgets.get({ id: widgetId }))[0];
  miro.board.widgets.update({
    id: widget.id,
    metadata: {
      [APP_ID]: {
        length: calculateLength(
          widget.startPosition.x,
          widget.startPosition.y,
          widget.endPosition.x,
          widget.endPosition.y
        ),
      },
    },
  });
};

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
      borderStyle: 1,
    },
    x: positionX,
    y: positionY,
  });

  miro.board.viewport.get({
    viewport: { x: positionX, y: positionY },
  });
};

export const addMetadataToWidget = (widgetId, widgetType) => {
  if (widgetType === SHAPE) {
    return addMetadataToShape(widgetId);
  }

  if (widgetType === LINE) {
    return addMetadataToLine(widgetId);
  }

  return throws("Widget not supported on SpaceMeasure.");
};
