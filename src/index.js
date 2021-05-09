/* eslint-disable no-undef */
// import { updateShapeMetadata } from "./calcs";
import * as constants from "./constants";
import {
  updateLinesLengths,
  updateShapesAreaPerimeter,
} from "./Listeners/WidgetsUpdate";

miro.onReady(async () => {
  const icon24 =
    '<g id="Layer_1"><path d="M2.796,2.468 L2.749,22.468" fill-opacity="0" stroke="#000000" stroke-width="2"/><path d="M3.5,21.5 L23.564,21.5" fill-opacity="0" stroke="#000000" stroke-width="2"/><path d="M2.796,14.783 C3.209,13.972 3.594,13.171 4.059,12.371 C4.623,11.401 5.385,10.556 5.953,9.606 C6.402,8.857 7.01,8.19 7.426,7.395 C7.433,7.382 7.577,7.143 7.584,7.143 C7.752,7.143 8.14,9.507 8.163,9.606 C8.417,10.699 9.623,17.334 10.268,17.95 C10.54,18.21 10.69,17.331 10.846,16.995 C11.092,16.467 11.363,15.957 11.636,15.437 C12.745,13.317 13.466,11.153 14.687,9.053 C15.97,6.848 15.997,5.125 18.107,8.148 C18.173,8.244 19.421,9.809 19.475,9.757 C20.284,8.984 20.992,7.211 21.527,6.188" fill-opacity="0" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g>';

  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: "widget counter",
        svgIcon: icon24,
        onClick: () => {
          miro.board.ui.openLeftSidebar("app.html");
        },
      },
    },
  });

  let allShapes = await miro.board.widgets.get({ type: constants.SHAPE });
  console.log(allShapes);
  let allLines = await miro.board.widgets.get({ type: constants.LINE });
  console.log(allLines);

  updateShapesAreaPerimeter(allShapes);
  updateLinesLengths(allLines);
  //  = await miro.board.widgets.get({ type: "shape" });

  // miro.addListener("SELECTION_UPDATED", (event) => {
  //   event.data.forEach((widget) => {
  //     if (widget.type === constants.SHAPE) {
  //       miro.showNotification(
  //         `Area: ${widget.metadata["3074457358398558776"].area}`
  //       );
  //     }
  //   });
  // });

  // miro.addListener("WIDGETS_CREATED", (event) => {
  //   console.log("WIDGETS_CREATED");
  //   if (event.data[0].type === constants.SHAPE) {
  //     updateShapeMetadata(event.data[0].id);
  //   }
  // });

  // miro.addListener("WIDGETS_DELETED", (event) => {
  //   console.log(event);
  // });

  // miro.addListener("WIDGETS_TRANSFORMATION_UPDATED", (event) => {
  //   event.data.forEach((widget) => {
  //     if (widget.type === constants.SHAPE) {
  //       updateShapeMetadata(widget.id);
  //     }
  //   });
  // });

  // miro.board.widgets.get({ type: constants.SHAPE }).then((widgets) => {
  //   widgets.forEach((widget) => {
  //     if (!widget.metadata["3074457358398558776"]) {
  //       updateShapeMetadata(widget.id);
  //     }
  //   });
  // });
});
