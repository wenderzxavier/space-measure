import { calculateAreaForShape, calculatePerimeterForShape } from "./calcs";
import { APP_ID, AVAILABLE_SHAPES } from "./constants";
import { getMiroWidgets } from "./miro.functions";
import { applyScale } from "./scale";

export const isShapeAvailable = (shape) => Object.values(AVAILABLE_SHAPES).includes(shape);

const formatWidgetsByGroup = async (widgetsIds) => {
  const widgets = await Promise.all(
    widgetsIds.map(async (widgetId) => {
      const widget = await getMiroWidgets({ id: widgetId });
      return widget[0];
    })
  );

  return widgets.reduce(
    (accumulated, currentWidget) => {
      if (currentWidget && currentWidget.groupId) {
        const accumulatedArea = accumulated[currentWidget.groupId]?.area || 0;
        const accumulatedPerimeter = accumulated[currentWidget.groupId]?.perimeter || 0;
        const accumulatedLength = accumulated[currentWidget.groupId]?.length || 0;
        const accumulatedWidgets = accumulated[currentWidget.groupId]?.widgets || [];

        const calculatedLength = applyScale(currentWidget.metadata[APP_ID].length) || 0;

        return {
          ...accumulated,
          [currentWidget.groupId]: {
            area: accumulatedArea + calculateAreaForShape(currentWidget.metadata[APP_ID]),
            perimeter: accumulatedPerimeter + calculatePerimeterForShape(currentWidget.metadata[APP_ID]),
            length: accumulatedLength + calculatedLength,
            widgets: [...accumulatedWidgets, { id: currentWidget.id, ...currentWidget.metadata[APP_ID], text: currentWidget.plainText }],
          },
        };
      } else {
        return {
          ...accumulated,
          ungrouped: [...accumulated.ungrouped, { id: currentWidget.id, ...currentWidget.metadata[APP_ID], text: currentWidget.plainText }],
        };
      }
    },
    { ungrouped: [] }
  );
};

const getIdsFromWidgetsWithMetadata = (widgets = []) =>
  widgets.reduce((accumulated, currentWidget) => {
    if (currentWidget.metadata.hasOwnProperty(APP_ID)) {
      return [...accumulated, currentWidget.id];
    }
    return accumulated;
  }, []);

export const filterWidgetsByIds = (widgets, ids) => widgets.filter((currentWidget) => ids.indexOf(currentWidget.id) !== -1);

export const updateSelectedWidgets = (widgets) => {
  try {
    const widgetsIds = getIdsFromWidgetsWithMetadata(widgets);

    return formatWidgetsByGroup(widgetsIds);
  } catch {
    console.warn("An error occurred");
  }
};
