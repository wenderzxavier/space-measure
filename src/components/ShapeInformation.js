import { calculateAreaForShape } from "../utils/calcs";
import { SHAPE_ICONS, SQUARE } from "../utils/constants";
import { applyScale, formatValue } from "../utils/scale";

const ShapeInformation = ({ areaType, height, shapeType, text, width }) => (
  <div className="shape-wrapper">
    <div className="shape-type">{SHAPE_ICONS[shapeType]}</div>
    <div className="shape-info-wrapper">
      {text && (
        <div className="shape-info">
          <span>Content: {text}</span>
        </div>
      )}
      {width && (
        <div className="shape-info">
          <span>{`Width: ${formatValue(applyScale(width))}`}</span>
        </div>
      )}
      {height && (
        <div className="shape-info">
          <span>{`Height: ${formatValue(applyScale(height))}`}</span>
        </div>
      )}
      {width && height && (
        <div className="shape-info">
          <span>{`Area: ${formatValue(calculateAreaForShape({ shapeType, width, height, areaType }), SQUARE)}`}</span>
        </div>
      )}
    </div>
  </div>
);

export default ShapeInformation;
