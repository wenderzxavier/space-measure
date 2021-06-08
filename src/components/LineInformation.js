import { LINE_ICON } from "../utils/constants";
import { applyScale, formatValue } from "../utils/scale";

const LineInformation = ({ length, text }) => (
  <div className="line-wrapper">
    <div className="line-type">{LINE_ICON}</div>
    <div className="line-info-wrapper">
      {text && (
        <div className="line-info">
          <span>Content: {text}</span>
        </div>
      )}
      <div className="line-info">
        <span>{`Length: ${formatValue(applyScale(length))}`}</span>
      </div>
    </div>
  </div>
);

export default LineInformation;
