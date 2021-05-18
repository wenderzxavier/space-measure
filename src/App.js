/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import SelectWidgetsPanel, { MetricScaleSelector, MetricUnitSelector, updateSelectedWidgets, WidgetCreationButtons } from "./apps/sidebar";

import "./styles/app.scss";

const App = () => {
  const [selectedWidgets, setSelectedWidgets] = useState({ ungrouped: [] });

  useEffect(() => {
    setSelectionListener();
    setWidgetTransformationUpdatedListener();
    setWidgetCreatedListener();
  }, []);

  const setSelectionListener = () => {
    miro.addListener("SELECTION_UPDATED", (event) => {
      console.log(event);
      updateSelectedWidgets(event.data).then((widgetsToDisplay) => {
        setSelectedWidgets(() => widgetsToDisplay);
      });
    });
  };

  const setWidgetTransformationUpdatedListener = () => {
    miro.addListener("WIDGETS_TRANSFORMATION_UPDATED", (event) => {
      console.log(event);
      updateSelectedWidgets(event.data).then((widgetsToDisplay) => {
        setSelectedWidgets(() => widgetsToDisplay);
      });
    });
  };

  const setWidgetCreatedListener = () => {
    miro.addListener("WIDGETS_CREATED", (event) => {
      console.log(event);
      updateSelectedWidgets(event.data).then((widgetsToDisplay) => {
        setSelectedWidgets(() => widgetsToDisplay);
      });
    });
  };

  return (
    <>
      <div className="App">
        <h2>Space Measure</h2>
        <div className="scale-unit-selector">
          <MetricScaleSelector />
          <MetricUnitSelector />
        </div>
        <WidgetCreationButtons />
        <SelectWidgetsPanel widgetsInfo={selectedWidgets} />
      </div>
    </>
  );
};

window.miro.onReady(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
});

// 1) Scale input: The scale on architectural drawings are used to reflect a dimension on the drawing, which corresponds to a
// dimension in real life. And example of a scale 1/8" = 1'; this means that 1/8 inches on the drawing will correspond to 1 feet in
// real life. The dimensions could be in the metric system (m^2 and lm) or imperial system (Sqft and lf).

// 2) Draw Polygon: I will need to draw polygons inside Miro boards. The number of pixels cover by the polygon, based on the input
// scale, will result in the area of the polygon in SquareFeet or SquareMeters. I will be great if I will be able to draw rectangles
// too, which a special type of polygons.

// 3) Draw line: I will need to draw line segments inside Miro boards. The number of pixels cover by the line, based on the input
// scale, will result in the length of the line in Feet or Meters.

// 4) Count Shapes: I will need to count certain objects on architectural drawings. We can achieve that by clicking shapes on top
// of the concerned object and the count those shapes. No scale or dimension is needed for the shapes... only their count.

// 5) Report: I will need to be able to extract the information created using the web plug-in that will be built, into excel. The
// idea is to compile all the information of every polygon, line, or count done on the Miro board and create a report that provides structured information.

// All polygons, lines, and count will have specific properties that will be needed to be attached to each of them. Some of these properties
// area: Name - Area - Type - Floor - Perimeter - Length - Count. As discussed on our call, these properties can be input using a new UI
// inside Miro (example was the menu that appears on the left of the screen when selecting an object)
