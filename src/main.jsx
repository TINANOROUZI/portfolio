import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app.jsx"; // or "./App.jsx" — match your filename
import { BrowserRouter } from "react-router-dom";
import { LangProvider } from "./context/LangContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LangProvider>
      <App />
    </LangProvider>
  </BrowserRouter>
);
