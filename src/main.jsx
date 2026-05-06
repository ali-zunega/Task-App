import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Importaciones de estilos
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";

// Importación del Proveedor y el App
import App from "./App.jsx";
import { TaskProvider } from "./context/TaskContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </StrictMode>,
);
