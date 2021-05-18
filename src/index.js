/* eslint-disable no-undef */
// import { updateShapeMetadata } from "./calcs";
import { initializeSidebarAndMenuItem } from "./apps/miroBoard";
import * as constants from "./utils/constants";
import { getCurrentScale, getScaleUnit, setScale, setUnit } from "./utils/scale";
import { initWidgetsCreatedListener } from "./widgetEvents/WidgetsCreated";
import { initWidgetTransformatioUpdated } from "./widgetEvents/WidgetsTransformationUpdated";
import { updateLinesLengths, updateShapesAreaPerimeter } from "./widgetEvents/WidgetsUpdate";

miro.onReady(async () => {
  initializeSidebarAndMenuItem();

  const unit = getScaleUnit();
  const scale = getCurrentScale();
  if (!unit) setUnit(constants.SCALE_UNITS[0]);
  if (!scale) setScale("1:1");

  const allShapes = await miro.board.widgets.get({ type: constants.SHAPE });
  const allLines = await miro.board.widgets.get({ type: constants.LINE });

  updateShapesAreaPerimeter(allShapes);
  updateLinesLengths(allLines);

  miro.addListener("SELECTION_UPDATED", (event) => {
    console.log(event);
  });

  initWidgetsCreatedListener();
  initWidgetTransformatioUpdated();
});
