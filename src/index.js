/* eslint-disable no-undef */
import { initializeSidebarAndMenuItem } from "./apps/miroBoard";
import * as constants from "./utils/constants";
import { getCurrentScale, getCustomScale, getScaleUnit, setCustomScale, setScale, setUnit } from "./utils/scale";
import { updateLinesLengths, updateShapesWidthHeight } from "./widgetEvents/WidgetsUpdate";
import * as miroFn from "./utils/miro.functions";
import { initWidgetMetadata } from "./widgetEvents/WidgetsCreated";
import { initMetadataUpdate } from "./widgetEvents/WidgetsTransformationUpdated";

miro.onReady(async () => {
  initializeSidebarAndMenuItem();

  const unit = getScaleUnit();
  const scale = getCurrentScale();
  const customScale = getCustomScale();

  if (!unit) setUnit(constants.SCALE_UNITS[0]);
  if (!scale) setScale("1:1");
  if (!customScale) setCustomScale(1);

  const allShapes = await miroFn.getMiroWidgets({ type: constants.SHAPE });
  const allLines = await miroFn.getMiroWidgets({ type: constants.LINE });

  updateShapesWidthHeight(allShapes);
  updateLinesLengths(allLines);

  miroFn.initSelectionUpdatedListener(console.log);
  miroFn.initWidgetsCreatedListener(initWidgetMetadata);
  miroFn.initWidgetTransformatioUpdatedListener(initMetadataUpdate);
});
