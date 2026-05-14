import { useState } from "react";
import { useTaskContext } from "./context/useTaskContext";
import { useThemeContext } from "./context/useThemeContext";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskEdit from "./components/TaskEdit";
import TaskControls from "./components/TaskControls";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  const { tasks } = useTaskContext();
  const { theme, toggleTheme } = useThemeContext();

  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleOpenEdit = (task) => {
    setTaskToEdit(task);
  };

  return (
    <div className="container mt-1 px-sm-0">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <header className="bg-primary text-white py-4 mb-4 shadow position-relative rounded">
            <button
              className="btn btn-outline-light btn-sm position-absolute top-0 end-0 m-2"
              onClick={toggleTheme}
            >
              <i
                className={`bi ${theme === "light" ? "bi-moon-stars" : "bi-sun"} fs-5`}
              ></i>
            </button>
            <div className="container">
              <div className="d-flex align-items-center justify-content-md-evenly justify-content-center gap-3">
                {/* logo*/}
                <img
                  src={logo}
                  alt="Logo"
                  height="20%"
                  width="20%"
                  className="bg-white rounded-circle p-1 img-fluid img-thumbnail"
                />
                <div>
                  <h1 className="fw-bold mb-0">TaskApp</h1>
                  <p className="opacity-75 mb-0">
                    Organiza tu día de forma sencilla.
                  </p>
                </div>
              </div>
            </div>
          </header>

          <TaskInput />

          {tasks.length > 0 && <TaskControls />}

          <TaskList handleOpenEdit={handleOpenEdit} />

          {taskToEdit && (
            <TaskEdit
              key={taskToEdit.id}
              task={taskToEdit}
              onClose={() => setTaskToEdit(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
