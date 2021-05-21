/* eslint-disable no-undef */
import { LINE, SHAPE } from "../utils/constants";
import { updateLinesLengths, updateShapesAreaPerimeter } from "./WidgetsUpdate";

const widgetTransformationUpdateMetadata = async (widgets) => {
  console.log(widgets);
  const widgetsIDs = widgets.reduce(
    (ids, currentWidget) => {
      if (currentWidget.type === SHAPE) {
        return {
          ...ids,
          shapes: [...ids.shapes, currentWidget.id],
        };
      }

      if (currentWidget.type === LINE) {
        return {
          ...ids,
          lines: [...ids.lines, currentWidget.id],
        };
      }

      return ids;
    },
    {
      lines: [],
      shapes: [],
    }
  );

  if (widgetsIDs.shapes.length > 0) {
    const allShapes = await miro.board.widgets.get({ type: SHAPE });
    const shapesToUpdate = allShapes.filter((shape) => widgetsIDs.shapes.includes(shape.id));

    updateShapesAreaPerimeter(shapesToUpdate);
  }

  if (widgetsIDs.lines.length > 0) {
    let allLines = await miro.board.widgets.get({ type: LINE });
    const linesToUpdate = allLines.filter((line) => widgetsIDs.lines.includes(line.id));
    console.log(linesToUpdate);
    updateLinesLengths(linesToUpdate);
  }
};

export const initWidgetTransformatioUpdated = () =>
  miro.addListener("WIDGETS_TRANSFORMATION_UPDATED", (event) => {
    try {
      widgetTransformationUpdateMetadata(event.data);
    } catch (error) {
      console.warn(error);
    }
  });
