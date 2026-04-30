import { useState } from "react";
import TaskInput from "./components/TaskInput";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: crypto.randomUUID(), // Tip: usar randomUUID es más moderno que Date.now()
      text,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((newTasks) => newTasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div className="container mt-5">
      <header className="mb-4">
        <h1 className="text-center text-md-start fw-bold">Mis Tareas</h1>
        <p className="text-muted text-center text-md-start">
          Organiza tu día de forma sencilla.
        </p>
      </header>

      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <TaskInput addTask={addTask} />

          {/* Lista de Tareas */}
          <div className="list-group shadow-sm">
            {/* mensaje si no hay tareas en la lista */}
            {tasks.length === 0 ? (
              <div className="list-group-item p-4 text-center text-secondary">
                No hay tareas pendientes. ¡Disfruta tu día!
              </div>
            ) : (
              tasks.map((task) => (
                <div
                  key={task.id}
                  className="list-group-item p-3 d-flex justify-content-between align-items-center"
                >
                  <div className="d-flex align-items-center gap-4">
                    {/* Checkbox para marcar como completado */}
                    <i
                      className={`bi ${task.completed ? "bi-check-circle-fill text-success" : "bi-circle text-secondary"} fs-4`}
                      style={{ cursor: "pointer" }}
                      onClick={() => toggleTask(task.id)}
                    ></i>

                    <span
                      className={
                        task.completed
                          ? "text-decoration-line-through text-muted text-capitalize"
                          : "text-capitalize"
                      }
                    >
                      {task.text}
                    </span>
                  </div>

                  <button
                    className="btn btn-sm btn-outline-danger border-0 fs-4"
                    onClick={() => deleteTask(task.id)} // Corregido: función anónima
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
