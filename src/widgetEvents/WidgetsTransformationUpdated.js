/* eslint-disable no-undef */
import { LINE, SHAPE } from "../utils/constants";
import { getMiroWidgets } from "../utils/miro.functions";
import { updateLinesLengths, updateShapesWidthHeight } from "./WidgetsUpdate";

// Check
export const initMetadataUpdate = async (widgets) => {
  try {
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
      const allShapes = await getMiroWidgets({ type: SHAPE });
      const shapesToUpdate = allShapes.filter((shape) => widgetsIDs.shapes.includes(shape.id));

      updateShapesWidthHeight(shapesToUpdate);
    }

    if (widgetsIDs.lines.length > 0) {
      let allLines = await getMiroWidgets({ type: LINE });
      const linesToUpdate = allLines.filter((line) => widgetsIDs.lines.includes(line.id));

      updateLinesLengths(linesToUpdate);
    }
  } catch (error) {
    console.warn(error);
  }
};
