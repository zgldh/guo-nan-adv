import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Game from "./Game";
import Store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <Game />
    </Store>
  </React.StrictMode>,
  document.getElementById("root")
);
