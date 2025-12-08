import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

// only load axe in development
if (process.env.NODE_ENV !== "production") {
  import("@axe-core/react").then(({ default: axe }) => {
    axe(React, ReactDOM, 1000);
    console.log("react accessibility checker initialized");
  });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
