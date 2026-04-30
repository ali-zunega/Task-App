import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
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
            deleteTask={deleteTask}
          />
        ))
      )}
    </div>
  );
};
export default TaskList;
