import { useState } from "react";
import { useTaskContext } from "../context/useTaskContext";

import TaskItem from "./TaskItem";

const TaskList = () => {
  const { filteredTasks, deleteTask, toggleTask, filterStatus } =
    useTaskContext();
  const [deletingId, setDeletingId] = useState(null);
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
          />
        ))
      ) : filteredTasks.length === 0 && filterStatus === "completed" ? (
        <div className="list-group-item p-4 text-center text-secondary">
          Has completado todas tus tareas. ¡Disfruta tu día!
        </div>
      ) : (
        <div className="list-group-item p-4 text-center text-secondary">
          No hay tareas pendientes. ¡Disfruta tu día!
        </div>
      )}
    </div>
  );
};
export default TaskList;
