import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Importación del Proveedor de contexto y tema, y el App
import App from "./App.jsx";
import { TaskProvider } from "./context/TaskContext.jsx";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </ThemeProvider>
  </StrictMode>,
);
