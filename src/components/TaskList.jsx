import { useState } from "react";
import { useTaskContext } from "../context/useTaskContext";

import TaskItem from "./TaskItem";

const TaskList = ({ handleOpenEdit }) => {
  const { filteredTasks, deleteTask, toggleTask, filterStatus, searchTerm } =
    useTaskContext();
  const [deletingId, setDeletingId] = useState(null);
  // setea el mensaje que muestra cuando no hay tareas
  // dependiendo del filtro y busqueda
  const getEmptyMessage = () => {
    const hasSearch = searchTerm.trim().length > 0;

    if (hasSearch) {
      return `No se encontraron tareas para "${searchTerm}"`;
    }
    if (filterStatus === "completed") {
      return "Has completado todas tus tareas. ¡Disfruta tu día!";
    }
    return "No hay tareas pendientes. ¡Disfruta tu día!";
  };
  const handleDelete = (id) => {
    setDeletingId(id);

    // demoramos la eliminacion para que muestre la animacion
    setTimeout(() => {
      deleteTask(id);
      setDeletingId(null);
    }, 400);
  };

  return (
    <div className="list-group shadow-sm">
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={handleDelete}
            isDeleting={task.id === deletingId}
            handleOpenEdit={handleOpenEdit}
          />
        ))
      ) : (
        <div className="list-group-item p-4 text-center text-secondary">
          {getEmptyMessage()}
        </div>
      )}
    </div>
  );
};
export default TaskList;
