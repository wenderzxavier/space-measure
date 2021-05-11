import { APP_ID, LINE, SHAPE } from "../utils/constants";

export const widgetSelected = () => {};

export const infoForMenuItem = (widgets = []) => {
  const widgetsWithMetadata = widgets.filter((widget) =>
    widget.metadata.hasOwnProperty(APP_ID)
  );

  console.log("widgetsWithMetadata");
  console.log(widgetsWithMetadata);

  if (widgetsWithMetadata.length === 0) {
    return null;
  }

  return widgetsWithMetadata.reduce(
    (accumulated, currentWidget) => {
      if (currentWidget.type === SHAPE) {
        const { area, perimeter } = currentWidget.metadata[APP_ID];
        return {
          ...accumulated,
          area: accumulated.area + area,
          perimeter: accumulated.perimeter + perimeter,
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
