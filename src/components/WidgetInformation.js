import LineInformation from "./LineInformation";
import ShapeInformation from "./ShapeInformation";

const WidgetInformation = ({ widgets }) =>
  widgets.map((widget) => (
    <div key={widget.id} className="widget-info-wrapper">
      {widget.hasOwnProperty("shapeType") ? <ShapeInformation {...widget} /> : <LineInformation {...widget} />}
    </div>
  ));

export default WidgetInformation;
