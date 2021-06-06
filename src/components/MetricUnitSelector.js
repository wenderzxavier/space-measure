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
    <select value={selectedUnit} onChange={(evt) => handleChange(evt)} className="unit-selector">
      {SCALE_UNITS.map((unit, index) => (
        <option key={index} value={unit}>
          {unit}
        </option>
      ))}
    </select>
  );
};

export default MetricUnitSelector;
