import { APP_ID, LINE, LINEAR, SHAPE_NAME, SQUARE } from "./constants";
import { formatValue } from "./scale";

const filterWidgets = (widgetsToSearch, allWidgets) =>
  allWidgets.filter((widget) => widgetsToSearch.includes(widget.id));

const newLine = { Widget: "", Area: "", Perimeter: "" };

const getFormattedFrameContent = (frameContent) => {
  console.log(frameContent);
  const content = [];

  Object.keys(frameContent).forEach((key) => {
    if (key !== "ungrouped") {
      content.push({
        Widget: "Group",
        Type: [...new Set(frameContent[key].Type)].toString() || key,
        Area: formatValue(frameContent[key].Area, SQUARE),
        Perimeter: formatValue(frameContent[key].Perimeter, LINEAR),
        Length: formatValue(frameContent[key].Length, LINEAR),
      });

      console.log(key);

      frameContent[key].Widgets.forEach((widget) => {
        content.push(widget);
      });

      content.push(newLine);
    }
  });

  frameContent["ungrouped"].forEach((widget) => {
    content.push(widget);
  });

  return content;
};

const formatWidgetsByGroup = (widgets) =>
  widgets.reduce(
    (accumulated, currentWidget) => {
      if (currentWidget.groupId) {
        const accumulatedArea = accumulated[currentWidget.groupId]?.Area || 0;
        const accumulatedPerimeter = accumulated[currentWidget.groupId]?.Perimeter || 0;
        const accumulatedLength = accumulated[currentWidget.groupId]?.Length || 0;
        const accumulatedWidgets = accumulated[currentWidget.groupId]?.Widgets || [];
        const accumulatedWidgetTexts = accumulated[currentWidget.groupId]?.Type || [];

        const { area, perimeter, length, areaType, shapeType, ...otherProps } = currentWidget.metadata[APP_ID];
        const shapeName = shapeType ? SHAPE_NAME[shapeType] : LINE;

        return {
          ...accumulated,
          [currentWidget.groupId]: {
            Area: accumulatedArea + (area || 0),
            Perimeter: accumulatedPerimeter + (perimeter || 0),
            Length: accumulatedLength + (length || 0),
            Type: [...accumulatedWidgetTexts, currentWidget.plainText],
            Widgets: [
              ...accumulatedWidgets,
              {
                Widget: currentWidget.type,
                Type: currentWidget.plainText || shapeName,
                Area: formatValue(area || 0, SQUARE),
                Perimeter: formatValue(perimeter || 0, LINEAR),
                Length: formatValue(length || 0, LINEAR),
                Other: otherProps,
              },
            ],
          },
        };
      } else {
        const { area, perimeter, length, areaType, shapeType, ...otherProps } = currentWidget.metadata[APP_ID];

        const shapeName = shapeType ? SHAPE_NAME[shapeType] : LINE;

        return {
          ...accumulated,
          ungrouped: [
            ...accumulated.ungrouped,
            {
              Widget: currentWidget.type,
              Type: currentWidget.plainText || shapeName,
              Area: formatValue(area || 0, SQUARE),
              Perimeter: formatValue(perimeter || 0, LINEAR),
              Length: formatValue(length || 0, LINEAR),
              Other: otherProps,
            },
          ],
        };
      }
    },
    { ungrouped: [] }
  );

export const updateFileContent = (boardContent) => {
  const pagesContent = [];
  const sheetNames = [];

  boardContent.frames.forEach((frame, index) => {
    const childrenWidgets = frame.childrenIds;
    const frameWidgets = filterWidgets(childrenWidgets, boardContent.widgets);
    const formattedWidgets = formatWidgetsByGroup(frameWidgets);

    const frameName = frame.title ? frame.title : `Frame ${index + 1}`;
    sheetNames.push({ sheetid: frameName, header: true });

    const formattedFrameContent = getFormattedFrameContent(formattedWidgets);
    console.log(formattedFrameContent);
    pagesContent.push(formattedFrameContent);
  });

  console.log(pagesContent);

  const unprocessedWidgets = [];

  return [sheetNames, pagesContent];
};
