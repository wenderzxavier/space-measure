/* eslint-disable no-undef */
import { calculateLength } from "../utils/calcs";
import { APP_ID, AVAILABLE_SHAPES, LINE, SHAPE, FULL, SHAPE_NAME } from "../utils/constants";
import { isShapeAvailable } from "../utils";
import * as miroFn from "../utils/miro.functions";

const WIDTH = 200;
const HEIGHT = 200;

// Check
const addMetadataToShape = async (widgetId) => {
  const widget = await miroFn.getMiroWidgets({ id: widgetId })[0];
  if (isShapeAvailable(widget.style.shapeType)) {
    miroFn.updateMiroWidget(widget.id, { width: widget.width, height: widget.height, areaType: FULL, shapeType: widget.style.shapeType });
  } else {
    miroFn.updateMiroWidget(widget.id, { count: true, shapeType: widget.style.shapeType });
  }
};

const addMetadataToLine = async (widgetId) => {
  const widget = await miroFn.getMiroWidgets({ id: widgetId })[0];

  miroFn.updateMiroWidget(widget.id, {
    length: calculateLength(widget.startPosition.x, widget.startPosition.y, widget.endPosition.x, widget.endPosition.y),
  });
};

// Check
export const createShape = async (areaType = FULL, shape = AVAILABLE_SHAPES.RECTANGLE) => {
  try {
    const boardCenter = miroFn.getMiroViewport();
    const positionX = boardCenter.x + boardCenter.width / 2;
    const positionY = boardCenter.y + boardCenter.height / 2;
    miroFn.createMiroWidget({
      type: SHAPE,
      text: `${areaType.charAt(0).toUpperCase() + areaType.slice(1)} ${SHAPE_NAME[shape]}`,
      height: HEIGHT,
      width: WIDTH,
      metadata: {
        [APP_ID]: {
          width: WIDTH,
          height: HEIGHT,
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

    miroFn.getMiroViewport({
      viewport: { x: positionX, y: positionY },
    });

    miroFn.showMiroNotification("Update or remove widget text when exporting to excel.");
  } catch (error) {
    miroFn.showMiroErrorNotification("Widget Creation Failed.");
  }
};

// Check
const addMetadataToWidget = (widgetId, widgetType) => {
  if (widgetType === SHAPE) {
    return addMetadataToShape(widgetId);
  }

  if (widgetType === LINE) {
    return addMetadataToLine(widgetId);
  }

  throw new Error("Widget not supported on SpaceMeasure.");
};

// Check
export const initWidgetMetadata = (event) => {
  try {
    const widget = event.data[0];
    if (!widget.metadata[APP_ID]) {
      addMetadataToWidget(widget.id, widget.type);
    }
  } catch (error) {
    console.warn(error);
  }
};
