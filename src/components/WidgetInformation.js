import LineInformation from "./LineInformation";
import ShapeInformation from "./ShapeInformation";

const WidgetInformation = ({ widgets }) =>
  widgets.map((widget) => (
    <div key={widget.id} className="widget-info-wrapper">
      {widget.hasOwnProperty("shapeType") ? <ShapeInformation key={widget.id} {...widget} /> : <LineInformation key={widget.id} {...widget} />}
    </div>
  ));

export default WidgetInformation;
