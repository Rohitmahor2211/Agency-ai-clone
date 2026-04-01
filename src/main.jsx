import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeContext from "./comtextApi/ThemeContext.jsx";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routes/Routing.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeContext>,
);
