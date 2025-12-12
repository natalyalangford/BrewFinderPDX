// entry point for react app
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

// only load axe in development
if (process.env.NODE_ENV !== "production") {
  import("@axe-core/react").then(({ default: axe }) => {
    axe(React, ReactDOM, 1000); // delay helps avoid running ace before ui is done rendering
    console.log("react accessibility checker initialized");
  });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// render app
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
