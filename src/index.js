import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { serviceWorkerRegistration } from "register";
import { ScoreProvider } from "components/context/ScoreContet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ScoreProvider>
      <App />
    </ScoreProvider>
  </React.StrictMode>
);

serviceWorkerRegistration();
