import { useEffect } from "react";
// import { LINE } from "../utils/constants";
// import { getMiroWidgets } from "../utils/miro.functions";

const OverviewTab = () => {
  useEffect(() => {
    console.log(new Date());
  });

  return (
    <div>
      <h3 className="section-heading">
        <span>Widgets</span>
      </h3>
    </div>
  );
};

export default OverviewTab;
