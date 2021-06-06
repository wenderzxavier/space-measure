import { APP_ID, AVAILABLE_SHAPES } from "./constants";

export const isShapeAvailable = (shape) => Object.values(AVAILABLE_SHAPES).includes(shape);

export const getIdsFromWidgetsWithMetadata = (widgets = []) =>
  widgets.reduce((accumulated, currentWidget) => {
    if (currentWidget.metadata.hasOwnProperty(APP_ID)) {
      return [...accumulated, currentWidget.id];
    }
    return accumulated;
  }, []);

export const filterWidgetsByIds = (widgets, ids) => widgets.filter((currentWidget) => ids.indexOf(currentWidget.id) !== -1);
