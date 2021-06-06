import { TAB_ICONS } from "../utils/constants";

const TabSelector = ({ currentTab, changeTab }) => (
  <div className="tabs">
    {Object.keys(TAB_ICONS).map((tabName) => (
      <div key={tabName} className={`tab-wrapper ${currentTab === tabName ? "tab-active" : ""}`}>
        <div onClick={() => changeTab(tabName)} className="tab-icon">
          {TAB_ICONS[tabName]}
        </div>
      </div>
    ))}
  </div>
);

export default TabSelector;
