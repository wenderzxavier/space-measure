import { ReactComponent as FullEllipse } from "../assets/full-ellipse.svg";
import { ReactComponent as HalfEllipse } from "../assets/half-ellipse.svg";
import { ReactComponent as QuarterEllipse } from "../assets/quarter-ellipse.svg";
import { ReactComponent as FullTriangle } from "../assets/full-triangle.svg";
import { ReactComponent as FullRectangle } from "../assets/full-rectangle.svg";
import { ReactComponent as HalfTriangle } from "../assets/half-triangle.svg";
import { ReactComponent as Parallelogram } from "../assets/parallelogram.svg";
import { AVAILABLE_SHAPES, FULL, HALF, QUARTER } from "../utils/constants";
import { createShape } from "../widgetEvents/WidgetsCreated";

export const WidgetCreationButtons = () => (
  <div className="widget-creation">
    <button onClick={() => createShape(FULL, AVAILABLE_SHAPES.ELLIPSE)}>
      <FullEllipse />
      Create Full Ellipse
    </button>
    <button onClick={() => createShape(HALF, AVAILABLE_SHAPES.ELLIPSE)}>
      <HalfEllipse />
      Create Half Ellipse
    </button>
    <button onClick={() => createShape(QUARTER, AVAILABLE_SHAPES.ELLIPSE)}>
      <QuarterEllipse />
      Create Quarter Ellipse
    </button>
    <button onClick={() => createShape(FULL, AVAILABLE_SHAPES.RECTANGLE)}>
      <FullRectangle />
      Create Full Quadrilateral
    </button>
    <button onClick={() => createShape(FULL, AVAILABLE_SHAPES.PARALLELOGRAM)}>
      <Parallelogram />
      Create Full Parallelogram
    </button>
    <button onClick={() => createShape(HALF, AVAILABLE_SHAPES.PARALLELOGRAM)}>
      <Parallelogram />
      Create Half Parallelogram
    </button>
    <button onClick={() => createShape(FULL, AVAILABLE_SHAPES.TRIANGLE)}>
      <FullTriangle />
      Create Full Triangle
    </button>
    <button onClick={() => createShape(HALF, AVAILABLE_SHAPES.TRIANGLE)}>
      <HalfTriangle />
      Create Half Triangle
    </button>
  </div>
);
