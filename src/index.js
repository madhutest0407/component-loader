import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { Circle } from "./loaders-basic/circle";
import { Line } from "./loaders-basic/line";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Circle />
    <Line />
  </StrictMode>,
  rootElement
);
