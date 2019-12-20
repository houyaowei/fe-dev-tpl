import * as React from "react";
import * as ReactDOM from "react-dom";

import {Hello} from "./components/hello";

ReactDOM.render(
  <Hello compile="Typescript" framework="Reactjs@16.12" />,
  document.getElementById("app") 
);
