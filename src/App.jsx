import { useTasks } from "./hooks/useTasks";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const { tasks, addTask, deleteTask, toggleTask } = useTasks();

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <header className="mb-4">
            <h1 className="text-center text-md-start fw-bold">Mis Tareas</h1>
            <p className="text-muted text-center text-md-start">
              Organiza tu día de forma sencilla.
            </p>
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
