import { filterWidgetsByIds, isShapeAvailable } from "../utils";
import { calculateAreaForShape } from "../utils/calcs";
import { APP_ID } from "../utils/constants";
import { getScaleUnit } from "../utils/scale";

const OverviewArea = ({ frames, shapes }) => {
  const getTotalAreaForFrameWidgets = (ids) =>
    filterWidgetsByIds(shapes, ids).reduce((accumulatedArea, currentWidget) => {
      if (isShapeAvailable(currentWidget.metadata[APP_ID].shapeType)) {
        return accumulatedArea + calculateAreaForShape(currentWidget.metadata[APP_ID]);
      }

      return accumulatedArea;
    }, 0);

  return (
    <>
      <h3 className="section-heading">
        <span>Area</span>
      </h3>

      {frames.length > 0 ? (
        <>
          {frames.map((frame) => (
            <div className="section-content">
              <span>{`${frame.title} SHAPES`}</span>
              <span>
                {getTotalAreaForFrameWidgets(frame.childrenIds)}
                {getScaleUnit()}
              </span>
            </div>
          ))}
        </>
      ) : (
        <div className="section-content">
          <span>No Frame Found</span>
        </div>
      )}
    </>
  );
};

export default OverviewArea;
