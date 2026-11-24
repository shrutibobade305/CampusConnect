import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style.css";

const appElement = document.querySelector<HTMLDivElement>("#app");

if (!appElement) {
  throw new Error("App element not found");
}

createRoot(appElement).render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(App)
  )
);