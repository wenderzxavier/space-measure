import { calculateAreaForShape, calculatePerimeterForShape } from "../utils/calcs";
import { APP_ID, LINE, SHAPE } from "../utils/constants";
import { applyScale } from "../utils/scale";

const getWidgetsWithMetadata = (widgets = []) => {
  const widgetsWithMetadata = widgets.filter((widget) => widget.metadata.hasOwnProperty(APP_ID));

  if (widgetsWithMetadata.length === 0) {
    return null;
  }

  return widgetsWithMetadata;
};

export const infoForMenuItem = (widgets) => {
  const widgetsWithMetadata = getWidgetsWithMetadata(widgets);

  if (!widgetsWithMetadata) return null;

  return widgetsWithMetadata.reduce(
    (accumulated, currentWidget) => {
      if (currentWidget.type === SHAPE) {
        const { count } = currentWidget.metadata[APP_ID];

        if (count) {
          return accumulated;
        }

        return {
          ...accumulated,
          area: accumulated.area + calculateAreaForShape(currentWidget.metadata[APP_ID]),
          perimeter: accumulated.perimeter + calculatePerimeterForShape(currentWidget.metadata[APP_ID]),
        };
      }

      if (currentWidget.type === LINE) {
        const { length } = currentWidget.metadata[APP_ID];
        return {
          ...accumulated,
          length: accumulated.length + applyScale(length),
        };
      }
      return accumulated;
    },
    {
      area: 0,
      perimeter: 0,
      length: 0,
    }
  );
};
