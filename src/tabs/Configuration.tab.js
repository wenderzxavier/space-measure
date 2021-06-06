import { useState } from "react";
import CustomScaleSelector from "../components/CustomScaleSelector";
import MetricScaleSelector from "../components/MetricScaleSelector";
import MetricUnitSelector from "../components/MetricUnitSelector";
import { getCurrentScale } from "../utils/scale";

const ConfigurationTab = () => {
  const [currentScale, setCurrentScale] = useState(getCurrentScale());
  return (
    <div>
      <MetricScaleSelector currentScale={currentScale} onChangeScale={setCurrentScale} />
      <MetricUnitSelector />
      {currentScale === "CUSTOM" && <CustomScaleSelector />}
    </div>
  );
};

export default ConfigurationTab;
