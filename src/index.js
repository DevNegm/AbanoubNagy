import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Styles/style.scss";
import { BrowserRouter } from "react-router-dom";
import useLocalStorage from "use-local-storage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
