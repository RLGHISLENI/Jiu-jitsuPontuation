import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { serviceWorkerRegistration } from "register";
import { ScoreProvider } from "components/context/ScoreContet";
import { ActivePlayerProvider } from "components/context/ActivePlayerContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ScoreProvider>
      <ActivePlayerProvider>
        <App />
      </ActivePlayerProvider>
    </ScoreProvider>
  </React.StrictMode>
);

// serviceWorkerRegistration(); // Comentado para desativar o service worker. Para reativar, descomente esta linha.
