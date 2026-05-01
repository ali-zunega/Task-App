const TaskItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className="list-group-item p-3 d-flex justify-content-between align-items-center animate__animated animate__fadeIn">
      <div className="d-flex align-items-center gap-4">
        <i
          className={`bi ${task.completed ? "bi-check-circle-fill text-success" : "bi-circle text-secondary"} fs-5`}
          style={{ cursor: "pointer" }}
          onClick={() => toggleTask(task.id)}
        ></i>
        <span
          className={`text-capitalize fs-5 ${
            task.completed ? "text-decoration-line-through text-muted" : ""
          }`}
        >
          {task.text}
        </span>
      </div>
      <button
        className="btn btn-sm text-danger border-0"
        onClick={() => deleteTask(task.id)}
      >
        <i className="bi bi-trash fs-5"></i>
      </button>
    </div>
  );
};

export default TaskItem;
