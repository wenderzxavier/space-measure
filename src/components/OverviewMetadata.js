import { filterWidgetsByIds } from "../utils";
import { APP_ID } from "../utils/constants";

const OverviewMetadata = ({ frames, shapes }) => {
  const getMetadataContentForWidgets = (ids) => {
    filterWidgetsByIds(shapes, ids).reduce((accumulatedMetadata, widget) => {
      const { width, height, areaType, shapeType, length, ...otherMetadata } = widget.metadata[APP_ID];
      console.log(otherMetadata);
    }, {});
  };

  return (
    <>
      <h3 className="section-heading">
        <span>Data</span>
      </h3>

      {frames.length > 0 ? (
        <>
          {frames.map((frame) => (
            <>
              <div key={frame.id} className="section-content">
                <span>{frame.title}</span>
                <span>-</span>
              </div>
              {getMetadataContentForWidgets(frame.childrenIds).map((metadata) => (
                <div key={metadata.key} className="section-content">
                  <span>{metadata.key}</span>
                  <span>{metadata.value}</span>
                </div>
              ))}
            </>
          ))}
        </>
      ) : (
        <div className="section-content">
          <span>No Frame Found</span>
        </div>
      )}
    </>
  );
};

export default OverviewMetadata;
