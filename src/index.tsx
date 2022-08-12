import React, { StrictMode } from "react";
import DOM from "react-dom/client";
import App from "./app";

const element = document.querySelector("#root");
element != null && DOM.hydrateRoot(element, <StrictMode><App /></StrictMode>);
