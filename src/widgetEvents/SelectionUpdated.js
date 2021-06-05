import { APP_ID, LINE, SHAPE } from "../utils/constants";

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
        const { width, height, areaType, shapeType, count } = currentWidget.metadata[APP_ID];

        if (count) {
          return accumulated;
        }

        return {
          ...accumulated,
          // Calcular Area e Perimetro aqui
          // area: accumulated.area + area,
          // perimeter: accumulated.perimeter + perimeter,
        };
      }

      if (currentWidget.type === LINE) {
        const { length } = currentWidget.metadata[APP_ID];
        return {
          ...accumulated,
          length: accumulated.length + length,
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
