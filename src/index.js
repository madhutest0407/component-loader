import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { Shape } from "./loaders-basic/shape";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Shape shapeType={"circle"} />
  </StrictMode>,
  rootElement
);
