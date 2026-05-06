import { useTasks } from "./hooks/useTasks";

import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskControls from "./components/TaskControls";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  const {
    tasks,
    addTask,
    deleteTask,
    toggleTask,
    searchTerm,
    setSearchTerm,
    filterStatus,
    setFilterStatus,
  } = useTasks();

  // filtrado
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.text
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" ||
      (filterStatus === "completed" ? task.completed : !task.completed);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="container mt-1 px-sm-0">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <header className="bg-primary text-white py-5 mb-5 shadow">
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

          <TaskInput addTask={addTask} />

          {tasks.length > 0 && (
            <TaskControls
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
            />
          )}

          <TaskList
            tasks={filteredTasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            filterStatus={filterStatus}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
