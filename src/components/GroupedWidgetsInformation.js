import { useState } from "react";
import { SQUARE } from "../utils/constants";
import { formatValue } from "../utils/scale";
import { ReactComponent as Arrow } from "../assets/arrow-down-icon.svg";
import WidgetInformation from "./WidgetInformation";

const groupHasInformation = (value) => !Number.isNaN(value) && value > 0;

const GroupedWidgetsInformation = ({ area, perimeter, length, widgets }) => {
  const [showWidgets, toggleCollapse] = useState(false);

  return (
    <div className="group-wrapper">
      <span>Group</span>
      {groupHasInformation(area) && (
        <div className="group-data">
          <span className="data-label">Area: </span>
          <span className="data-value">{formatValue(area, SQUARE)}</span>
        </div>
      )}
      {groupHasInformation(perimeter) && (
        <div className="group-data">
          <span className="data-label">Perimeter: </span>
          <span className="data-value">{formatValue(perimeter)}</span>
        </div>
      )}
      {groupHasInformation(length) && (
        <div className="group-data">
          <span className="data-label">Length: </span>
          <span className="data-value">{formatValue(length)}</span>
        </div>
      )}
      <Arrow className={`collapsable-widgets ${showWidgets ? "show-widgets" : "hide-widgets"}`} onClick={() => toggleCollapse((state) => !state)} />
      {showWidgets && <WidgetInformation widgets={widgets} />}
    </div>
  );
};

export default GroupedWidgetsInformation;
