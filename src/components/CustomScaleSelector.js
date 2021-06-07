import { useEffect, useState } from "react";
import { isShapeAvailable } from "../utils";
import { APP_ID, LINE, SHAPE } from "../utils/constants";
import { initSelectionUpdatedListener, showMiroErrorNotification } from "../utils/miro.functions";
import { getCustomScale, setCustomScale } from "../utils/scale";

const CustomScaleSelector = () => {
  const [modifiedScale, setModifiedScale] = useState(getCustomScale());
  const [newWidth, setNewWidth] = useState(1);
  const [selectedWidget, setSelectedWidget] = useState(null);

  const sizeType = {
    LINE: "length",
    SHAPE: "width",
  };

  useEffect(() => {
    const getWidthFromWidget = (widget) => {
      try {
        if (widget.length > 0) {
          if (widget[0].type === LINE) {
            return setSelectedWidget({ type: LINE, width: widget[0].metadata[APP_ID].length });
          }

          if (widget[0].type === SHAPE && isShapeAvailable(widget[0].metadata[APP_ID].shapeType)) {
            return setSelectedWidget({ type: SHAPE, width: widget[0].metadata[APP_ID].width });
          }
        }

        setSelectedWidget(null);
      } catch (error) {
        showMiroErrorNotification("An Error occurred. Try again later.");
      }
    };

    initSelectionUpdatedListener(getWidthFromWidget);
  }, []);

  const handleSaveScale = () => {
    setCustomScale(modifiedScale);
  };

  const calculateNewScale = () => {
    if (newWidth > 0) {
      const newScale = newWidth / selectedWidget.width;
      setModifiedScale(newScale);
      setCustomScale(newScale);
    }
  };

  return (
    <div className="custom-scale-wrapper">
      <div className="custom-scale-description">
        <span>
          {selectedWidget
            ? `Selected ${selectedWidget.type} has ${sizeType[selectedWidget.type]} of ${selectedWidget.width.toFixed(2)}`
            : "Select a widget on the board to set it's length/width, or simply update the scale below."}
        </span>
      </div>

      {selectedWidget && (
        <div className="custom-scale-widget">
          <span>{`Set expected width/length for the selected object: (m/ft)`}</span>
          <div className="custom-scale-widget-content">
            <input value={newWidth} type="number" onChange={(evt) => setNewWidth(evt.target.value)} required />
            <button type="button" onClick={calculateNewScale}>
              Calculate Scale
            </button>
          </div>
        </div>
      )}

      <div className="custom-scale-content">
        <label htmlFor="custom-scale">Scale</label>
        <input name="custom-scale" className="custom-scale-input" type="number" value={modifiedScale} onChange={(evt) => setModifiedScale(evt.target.value)} required />
        {!selectedWidget && (
          <button type="button" onClick={handleSaveScale}>
            Set New Scale
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomScaleSelector;
