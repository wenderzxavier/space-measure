import { useEffect, useState } from "react";
import { isShapeAvailable } from "../utils";
import { APP_ID, LINE, SHAPE } from "../utils/constants";
import { initSelectionUpdatedListener, showMiroErrorNotification } from "../utils/miro.functions";

const CustomScaleSelector = () => {
  const [widthScale, setWidth] = useState(0);

  useEffect(() => {
    const getWidthFromWidget = (widget) => {
      try {
        if (widget[0].type === LINE) {
          setWidth(widget[0].metadata[APP_ID].length);
        }

        if (widget[0].type === SHAPE && isShapeAvailable(widget[0].metadata[APP_ID].shapeType)) {
          setWidth(widget[0].metadata[APP_ID].width);
        }
      } catch (error) {
        showMiroErrorNotification("An Error occurred. Try again later.");
      }
    };

    initSelectionUpdatedListener(getWidthFromWidget);
  }, []);

  return <input value={widthScale} type="number" onChange={(evt) => setWidth(evt.target.value)} required />;
};

export default CustomScaleSelector;
