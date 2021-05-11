/* eslint-disable no-undef */
import {
  calculateAreaForShape,
  calculateLength,
  calculatePerimeterForShape,
} from "../utils/calcs";
import {
  APP_ID,
  AVAILABLE_SHAPES,
  LINE,
  SHAPE,
  FULL,
  SHAPE_NAME,
} from "../utils/constants";
import { isShapeAvailable } from "../utils";

const WIDTH = 200;
const HEIGHT = 200;

const addMetadataToShape = async (widgetId) => {
  const widget = (await miro.board.widgets.get({ id: widgetId }))[0];
  if (isShapeAvailable(widget.style.shapeType)) {
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
          shapeType: widget.style.shapeType,
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
        shapeType: shape,
      },
    },
    style: {
      shapeType: shape,
      borderStyle: areaType === FULL ? 2 : 1,
    },
    x: positionX,
    y: positionY,
  });

  miro.board.viewport.get({
    viewport: { x: positionX, y: positionY },
  });
};

const addMetadataToWidget = (widgetId, widgetType) => {
  if (widgetType === SHAPE) {
    return addMetadataToShape(widgetId);
  }

  if (widgetType === LINE) {
    return addMetadataToLine(widgetId);
  }

  throw new Error("Widget not supported on SpaceMeasure.");
};

export const initWidgetsCreatedListener = () =>
  miro.addListener("WIDGETS_CREATED", (event) => {
    try {
      const widget = event.data[0];
      if (!widget.metadata[APP_ID]) {
        addMetadataToWidget(widget.id, widget.type);
      }
    } catch (error) {
      console.warn(error);
    }
  });
