import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Narrative from "./components/Narrative";
import CoverPage from "./components/CoverPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CoverPage />
    <Narrative />
  </React.StrictMode>
);
