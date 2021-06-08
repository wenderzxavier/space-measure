import { calculateAreaForShape, calculatePerimeterForShape } from "./calcs";
import { APP_ID, LINE, LINEAR, SHAPE_NAME, SQUARE } from "./constants";
import { applyScale, formatValue } from "./scale";

const filterWidgets = (widgetsToSearch, allWidgets) => allWidgets.filter((widget) => widgetsToSearch.includes(widget.id));

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

        const { width, height, length, areaType, shapeType, ...otherProps } = currentWidget.metadata[APP_ID];
        const shapeName = shapeType ? SHAPE_NAME[shapeType] : LINE;

        const area = calculateAreaForShape(currentWidget.metadata[APP_ID]) || 0;
        const perimeter = calculatePerimeterForShape(currentWidget.metadata[APP_ID]) || 0;
        const formattedLength = applyScale(length) || 0;

        return {
          ...accumulated,
          [currentWidget.groupId]: {
            Area: accumulatedArea + area,
            Perimeter: accumulatedPerimeter + perimeter,
            Length: accumulatedLength + formattedLength,
            Type: [...accumulatedWidgetTexts, currentWidget.plainText],
            Widgets: [
              ...accumulatedWidgets,
              {
                Widget: currentWidget.type,
                Type: currentWidget.plainText || shapeName,
                Area: formatValue(area, SQUARE),
                Perimeter: formatValue(perimeter, LINEAR),
                Length: formatValue(length, LINEAR),
                Other: otherProps,
              },
            ],
          },
        };
      } else {
        const { width, height, length, areaType, shapeType, ...otherProps } = currentWidget.metadata[APP_ID];

        const shapeName = shapeType ? SHAPE_NAME[shapeType] : LINE;
        const area = calculateAreaForShape(currentWidget.metadata[APP_ID]) || 0;
        const perimeter = calculatePerimeterForShape(currentWidget.metadata[APP_ID]) || 0;
        const formattedLength = applyScale(length) || 0;

        return {
          ...accumulated,
          ungrouped: [
            ...accumulated.ungrouped,
            {
              Widget: currentWidget.type,
              Type: currentWidget.plainText || shapeName,
              Area: formatValue(area, SQUARE),
              Perimeter: formatValue(perimeter, LINEAR),
              Length: formatValue(formattedLength, LINEAR),
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
