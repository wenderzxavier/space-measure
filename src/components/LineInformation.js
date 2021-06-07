import { applyScale, formatValue } from "../utils/scale";

const LineInformation = ({ length, text }) => (
  <div className="line-wrapper">
    <div className="line-heading">Line</div>
    {text && <div className="line-text">Content: {text}</div>}
    <div className="line-length">
      <span>Length</span>
      <span>{formatValue(applyScale(length))}</span>
    </div>
  </div>
);

export default LineInformation;
