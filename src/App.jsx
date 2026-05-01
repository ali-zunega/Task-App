import { useTasks } from "./hooks/useTasks";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  const { tasks, addTask, deleteTask, toggleTask } = useTasks();

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <header className="bg-primary text-white py-5 mb-5 shadow">
            <div className="container">
              <div className="d-flex align-items-center justify-content-md-evenly justify-content-center gap-3">
                {/* Tu logo */}
                <img
                  src={logo}
                  alt="Logo"
                  height="20%"
                  width="20%"
                  className="bg-white rounded-circle p-1 img-fluid img-thumbnail"
                />
                <div>
                  <h1 className="fw-bold mb-0">TaskMaster</h1>
                  <p className="opacity-75 mb-0">
                    Organiza tu día de forma sencilla.
                  </p>
                </div>
              </div>
            </div>
          </header>

          <TaskInput addTask={addTask} />

          <TaskList
            tasks={tasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
