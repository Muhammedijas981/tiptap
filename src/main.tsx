import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; // Ensure this path matches

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
