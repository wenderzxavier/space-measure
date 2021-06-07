import { useState } from "react";
import CustomScaleSelector from "../components/CustomScaleSelector";
import MetricScaleSelector from "../components/MetricScaleSelector";
import MetricUnitSelector from "../components/MetricUnitSelector";
import { getCurrentScale } from "../utils/scale";

import "../styles/configuration-tab.scss";
import ExcelExporter from "../components/ExcelExporter";

const ConfigurationTab = () => {
  const [currentScale, setCurrentScale] = useState(getCurrentScale());

  return (
    <div className="configuration-tab-content">
      <div className="scale-unit-selector">
        <div className="scale-unit-wrapper">
          <MetricScaleSelector currentScale={currentScale} onChangeScale={setCurrentScale} />
          <MetricUnitSelector />
        </div>
        {currentScale === "CUSTOM" && <CustomScaleSelector />}
      </div>
      <div className="excel-exporter-wrapper">
        <ExcelExporter />
      </div>
    </div>
  );
};

export default ConfigurationTab;
