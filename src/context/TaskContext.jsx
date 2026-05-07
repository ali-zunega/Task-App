import { createContext } from "react";
import { useTasks } from "../hooks/useTasks";

// 1. Creamos el contexto
const TaskContext = createContext();
export default TaskContext;

// proveedor
export const TaskProvider = ({ children }) => {
  const taskData = useTasks();

  // Movemos la lógica de filtrado aquí para que esté disponible en toda la app
  const filteredTasks = taskData.tasks.filter((task) => {
    const matchesSearch = task.text
      .toLowerCase()
      .includes(taskData.searchTerm.toLowerCase());
    const matchesFilter =
      taskData.filterStatus === "all" ||
      (taskData.filterStatus === "completed"
        ? task.completed
        : !task.completed);
    return matchesSearch && matchesFilter;
  });

  return (
    <TaskContext.Provider value={{ ...taskData, filteredTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
