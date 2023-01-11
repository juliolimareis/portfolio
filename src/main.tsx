import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

import "./libs/i18";

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement)
  .render(<App/>);
