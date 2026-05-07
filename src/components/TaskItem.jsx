import { capitalizeFirstLetter } from "../utils/formatText";

const TaskItem = ({ task, toggleTask, deleteTask, isDeleting }) => {
  return (
    <div
      onClick={() => toggleTask(task.id)}
      className={`list-group-item p-3 d-flex justify-content-between align-items-center shadow animate__animated animate__fadeIn task-item ${
        isDeleting ? "deleting" : ""
      }`}
      style={{ cursor: "pointer" }}
    >
      <div className="d-flex align-items-center gap-4">
        <i
          className={`bi ${
            task.completed
              ? "bi-check-circle-fill text-success"
              : "bi-circle text-secondary"
          } fs-5`}
        ></i>
        <span
          className={`fs-5 ${
            task.completed
              ? "completed-animation text-decoration-line-through text-muted"
              : ""
          }`}
        >
          {capitalizeFirstLetter(task.text)}
        </span>
      </div>

      <button
        className="btn btn-sm text-danger border-0"
        onClick={(e) => {
          e.stopPropagation();
          deleteTask(task.id);
        }}
        disabled={isDeleting}
      >
        <i className="bi bi-trash fs-5"></i>
      </button>
    </div>
  );
};

export default TaskItem;
