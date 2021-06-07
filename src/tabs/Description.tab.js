import { useEffect, useState } from "react";
import { updateSelectedWidgets } from "../utils";
import { initSelectionUpdatedListener } from "../utils/miro.functions";
import WidgetInformation from "../components/WidgetInformation";
import GroupedWidgetsInformation from "../components/GroupedWidgetsInformation";

const DescriptionTab = () => {
  const [widgetToDisplay, setWidgets] = useState({ ungrouped: [] });

  useEffect(() => {
    const formatInformationToDisplay = async (widgets) => {
      const selectedWidgets = await updateSelectedWidgets(widgets);

      setWidgets(selectedWidgets);
    };

    initSelectionUpdatedListener(formatInformationToDisplay);
  }, []);

  const groupedWidgets = Object.keys(widgetToDisplay).filter((item) => item !== "ungrouped");

  console.log(widgetToDisplay);

  return (
    <div className="description-tab-wrapper">
      <h3 className="section-heading">
        <span>Grouped Widgets</span>
      </h3>
      {groupedWidgets.length > 0 ? (
        <>
          {groupedWidgets.map((groupId) => (
            <GroupedWidgetsInformation {...widgetToDisplay[groupId]} />
          ))}
        </>
      ) : (
        <span>No group selected</span>
      )}
      <h3 className="section-heading">
        <span>Ungrouped Widgets</span>
      </h3>
      {widgetToDisplay["ungrouped"].length > 0 ? <WidgetInformation widgets={widgetToDisplay["ungrouped"]} /> : <span>No ungrouped widget selected</span>}
    </div>
  );
};

export default DescriptionTab;
