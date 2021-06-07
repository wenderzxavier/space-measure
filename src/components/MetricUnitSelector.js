import { useState } from "react";
import { SCALE_UNITS } from "../utils/constants";
import { getScaleUnit, setUnit } from "../utils/scale";

const MetricUnitSelector = () => {
  const initialScaleUnit = getScaleUnit();
  const [selectedUnit, setSelectedUnit] = useState(initialScaleUnit || "m/m²");

  const handleChange = (evt) => {
    setSelectedUnit(() => evt.target.value);
    setUnit(evt.target.value);
  };

  return (
    <div className="config-wrapper">
      <label className="config-label" htmlFor="unit-selector">
        Unit
      </label>
      <select value={selectedUnit} onChange={(evt) => handleChange(evt)} className="config-selector">
        {SCALE_UNITS.map((unit, index) => (
          <option key={index} value={unit}>
            {unit}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MetricUnitSelector;
