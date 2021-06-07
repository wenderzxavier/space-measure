import { calculateAreaForShape } from "../utils/calcs";
import { SHAPE_ICONS, SQUARE } from "../utils/constants";
import { applyScale, formatValue } from "../utils/scale";

const ShapeInformation = ({ areaType, height, shapeType, text, width }) => (
  <div className="shape-wrapper">
    <div className="shape-type">Shape: {SHAPE_ICONS[shapeType]}</div>
    {text && <div className="shape-text">Content: {text}</div>}
    <div className="shape-dimension-wrapper">
      <div className="shape-dimension">
        <span className="shape-dimension-label">Width</span>
        <span className="shape-dimension-label">{formatValue(applyScale(width))}</span>
      </div>
      <div className="shape-dimension">
        <span className="shape-dimension-label">Height</span>
        <span className="shape-dimension-label">{formatValue(applyScale(height))}</span>
      </div>
      <div className="shape-area">
        <span>Area</span>
        <span>{formatValue(calculateAreaForShape({ shapeType, width, height, areaType }), SQUARE)}</span>
      </div>
    </div>
  </div>
);

export default ShapeInformation;
