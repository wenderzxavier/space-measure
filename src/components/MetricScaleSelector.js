import { PIXEL_CONVERSION } from "../utils/constants";
import { setScale } from "../utils/scale";

export const MetricScaleSelector = ({ currentScale, onChangeScale }) => {
  const handleChange = (evt) => {
    const scale = evt.target.value;
    onChangeScale(() => scale);
    setScale(scale);
  };

  return (
    <select value={currentScale} onChange={(evt) => handleChange(evt)} className="scale-selector">
      <option disabled>Pixel Conversion</option>
      {PIXEL_CONVERSION.map((unit, index) => (
        <option key={index} value={unit}>
          {unit}
        </option>
      ))}
    </select>
  );
};

export default MetricScaleSelector;
