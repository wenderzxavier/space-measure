import { filterWidgetsByIds } from "../utils";

const OverviewType = ({ frames, shapes, lines }) => {
  const getTotalShapes = () =>
    frames.reduce((accumulated, frame) => {
      return accumulated + filterWidgetsByIds(shapes, frame.childrenIds).length;
    }, 0);

  const getTotalLines = () =>
    frames.reduce((accumulated, frame) => {
      return accumulated + filterWidgetsByIds(lines, frame.childrenIds).length;
    }, 0);

  return (
    <>
      <h3 className="section-heading">
        <span>Type</span>
      </h3>
      {frames.length > 0 && (
        <>
          <div className="section-content">
            <span>FRAMES</span>
            <span>{frames.length}</span>
          </div>
          {shapes.length > 0 && (
            <div className="section-content">
              <span>SHAPES</span>
              <span>{getTotalShapes()}</span>
            </div>
          )}
          {lines.length > 0 && (
            <div className="section-content">
              <span>LINES</span>
              <span>{getTotalLines()}</span>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default OverviewType;
