/* eslint-disable no-undef */
import { calculateLength } from "../utils/calcs";
import { APP_ID, AVAILABLE_SHAPES, LINE, SHAPE, FULL, SHAPE_NAME } from "../utils/constants";
import { isShapeAvailable } from "../utils";
import * as miroFn from "../utils/miro.functions";

const WIDTH = 200;
const HEIGHT = 200;

// Check
const addMetadataToShape = async (widgetId) => {
  let widget = await miroFn.getMiroWidgets({ id: widgetId });

  if (isShapeAvailable(widget[0].style.shapeType)) {
    miroFn.updateMiroWidget(widget[0].id, { width: widget[0].width, height: widget[0].height, areaType: FULL, shapeType: widget[0].style.shapeType });
  } else {
    miroFn.updateMiroWidget(widget[0].id, { count: true, shapeType: widget[0].style.shapeType });
  }
};

const addMetadataToLine = async (widgetId) => {
  const widget = await miroFn.getMiroWidgets({ id: widgetId });

  miroFn.updateMiroWidget(widget[0].id, {
    length: calculateLength(widget[0].startPosition.x, widget[0].startPosition.y, widget[0].endPosition.x, widget[0].endPosition.y),
  });
};

// Check
export const createShape = async (areaType = FULL, shape = AVAILABLE_SHAPES.RECTANGLE) => {
  try {
    const boardCenter = await miroFn.getMiroViewport();
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

    await miroFn.getMiroViewport({
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
export const initWidgetMetadata = (widgets) => {
  try {
    const widget = widgets[0];
    if (!widget.metadata[APP_ID]) {
      addMetadataToWidget(widget.id, widget.type);
    }
  } catch (error) {
    console.warn(error);
  }
};
