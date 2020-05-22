import React from "react";
import ReactDOM from "react-dom";

import Greeter from "./App";

// render function: tell React torender Greeter...
ReactDOM.render(
  <React.StrictMode>
    <Greeter maxLength={5} />
  </React.StrictMode>,

  document.getElementById("root")
);
