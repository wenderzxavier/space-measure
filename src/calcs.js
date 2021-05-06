/* eslint-disable no-undef */
const squareArea = (width, height) => width * height;

const squarePerimeter = (width, height) => width * 2 + height * 2;

export const updateShapeMetadata = async (widgetId) => {
  const widget = await miro.board.widgets.get({ id: widgetId });
  miro.board.widgets.update({
    id: widget[0].id,
    metadata: {
      "3074457358398558776": {
        area: squareArea(widget[0].width, widget[0].height),
        perimeter: squarePerimeter(widget[0].width, widget[0].height),
      },
    },
  });
};

export const calculateAreaForShape = () => {};
export const calculatePerimeterForShape = () => {};
