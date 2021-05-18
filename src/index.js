/* eslint-disable no-undef */
// import { updateShapeMetadata } from "./calcs";
import { initializeSidebarAndMenuItem } from "./apps/miroBoard";
import * as constants from "./utils/constants";
import { initWidgetsCreatedListener } from "./widgetEvents/WidgetsCreated";
import { initWidgetTransformatioUpdated } from "./widgetEvents/WidgetsTransformationUpdated";
import { updateLinesLengths, updateShapesAreaPerimeter } from "./widgetEvents/WidgetsUpdate";

miro.onReady(async () => {
  initializeSidebarAndMenuItem();

  const allShapes = await miro.board.widgets.get({ type: constants.SHAPE });
  const allLines = await miro.board.widgets.get({ type: constants.LINE });

  // console.log(allShapes);
  // console.log(allLines);

  updateShapesAreaPerimeter(allShapes);
  updateLinesLengths(allLines);

  miro.addListener("SELECTION_UPDATED", (event) => {
    console.log(event);
  });

  initWidgetsCreatedListener();
  initWidgetTransformatioUpdated();
});
