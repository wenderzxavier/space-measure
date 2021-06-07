import { PIXEL_CONVERSION } from "../utils/constants";
import { setScale } from "../utils/scale";

export const MetricScaleSelector = ({ currentScale, onChangeScale }) => {
  const handleChange = (evt) => {
    const scale = evt.target.value;
    onChangeScale(() => scale);
    setScale(scale);
  };

  return (
    <div className="config-wrapper">
      <label className="config-label" htmlFor="scale-selector">
        Scale
      </label>
      <select name="scale-selector" value={currentScale} onChange={(evt) => handleChange(evt)} className="config-selector">
        <option disabled>Pixel Conversion</option>
        {PIXEL_CONVERSION.map((unit, index) => (
          <option key={index} value={unit}>
            {unit}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MetricScaleSelector;
