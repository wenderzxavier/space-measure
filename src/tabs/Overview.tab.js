import { useEffect, useState } from "react";
import OverviewArea from "../components/OverviewArea";
import OverviewMetadata from "../components/OverviewMetadata";
import OverviewType from "../components/OverviewType";
import * as constants from "../utils/constants";
import { getMiroWidgets } from "../utils/miro.functions";

import "../styles/overview-tab.scss";

const OverviewTab = () => {
  const [lines, setLines] = useState([]);
  const [shapes, setShapes] = useState([]);
  const [frames, setFrames] = useState([]);

  const getLastUpdate = () => {
    var local = new Date();
    local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
    return local.toString().slice(0, 24);
  };

  useEffect(() => {
    const getWidgets = async () => {
      const allLines = await getMiroWidgets({ type: constants.LINE });
      const allShapes = await getMiroWidgets({ type: constants.SHAPE });
      const allFrames = await getMiroWidgets({ type: constants.FRAME });

      allLines.length > 0 && setLines(allLines);
      allShapes.length > 0 && setShapes(allShapes);
      allFrames.length > 0 && setFrames(allFrames);

      console.log(allShapes);
      console.log(allFrames);
    };

    getWidgets();
  }, []);

  return (
    <div className="overview-tab-wrapper">
      <OverviewType lines={lines} shapes={shapes} frames={frames} />
      <OverviewArea frames={frames} shapes={shapes} />
      {/* <OverviewMetadata frames={frames} shapes={shapes} /> */}
      <span className="update-timestamp">Last update {getLastUpdate()}</span>
    </div>
  );
};

export default OverviewTab;
