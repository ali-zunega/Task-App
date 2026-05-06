import { useState } from "react";

import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleTask, deleteTask, filterStatus }) => {
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
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={handleDelete}
            isDeleting={task.id === deletingId}
          />
        ))
      ) : tasks.length === 0 && filterStatus === "completed" ? (
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
