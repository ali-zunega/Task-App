import { useState } from "react";

import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
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
      {tasks.length === 0 ? (
        <div className="list-group-item p-4 text-center text-secondary">
          No hay tareas pendientes. ¡Disfruta tu día!
        </div>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={handleDelete}
            isDeleting={task.id === deletingId}
          />
        ))
      )}
    </div>
  );
};
export default TaskList;
