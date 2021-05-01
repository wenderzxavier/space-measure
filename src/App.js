/* eslint-disable no-undef */
import logo from "./logo.svg";
import "./app.css";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  miro.addListener("SELECTION_UPDATED", (widget) => {
    console.log("SELECTION_UPDATED");
    console.log(widget);
  });

  miro.addListener("WIDGETS_CREATED", (widget) => {
    console.log("WIDGETS_CREATED");
    console.log(widget);
  });

  miro.addListener("WIDGETS_DELETED", (widget) => {
    console.log("WIDGETS_DELETED");
    console.log(widget);
  });

  miro.addListener("WIDGETS_TRANSFORMATION_UPDATED", (widget) => {
    console.log("WIDGETS_TRANSFORMATION_UPDATED");
    console.log(widget);
  });

  miro.addListener("ALL_WIDGETS_LOADED", (widget) => {
    console.log("ALL_WIDGETS_LOADED");
    console.log(widget);
  });

  const handleClick = async () => {
    let allStickers = await miro.board.widgets.get({ type: "shape" });
    console.log(allStickers);
    let allFrames = await miro.board.widgets.get({ type: "frame" });
    console.log(allFrames);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => handleClick()}>Click Here</button>
      </header>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
