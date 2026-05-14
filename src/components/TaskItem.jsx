import {
  capitalizeFirstLetter,
  getPriorityColor,
  getPriorityLabel,
} from "../utils/formatText";

const TaskItem = ({
  task,
  toggleTask,
  deleteTask,
  isDeleting,
  handleOpenEdit,
}) => {
  return (
    <div
      onClick={() => toggleTask(task.id)}
      className={`list-group-item d-flex justify-content-between align-items-start gap-2 shadow animate__animated animate__fadeIn task-item ${
        isDeleting ? "deleting" : ""
      }`}
      style={{ cursor: "pointer" }}
    >
      <div className="d-flex align-items-start gap-3 flex-grow-1 me-2 min-w-0">
        <i
          className={`bi flex-shrink-0 mt-1 ${
            task.completed
              ? "bi-check-circle-fill text-success"
              : "bi-circle text-secondary"
          } fs-5`}
        ></i>
        <div className="d-flex flex-wrap gap-2 align-items-center min-w-0">
          <span
            className={`fs-5 text-break ${
              task.completed
                ? "completed-animation text-decoration-line-through text-muted"
                : ""
            }`}
          >
            {capitalizeFirstLetter(task.text)}
          </span>
          <span
            className={`badge bg-${getPriorityColor(task.priority)} priority-badge flex-shrink-0`}
          >
            {getPriorityLabel(task.priority)}
          </span>
        </div>
      </div>
      <div className="btn-actions">
        {!task.completed && (
          <button
            className="btn btn-sm text-primary border-0 flex-shrink-0"
            onClick={(e) => { e.stopPropagation(); handleOpenEdit(task); }}
          >
            <i className="bi bi-pencil fs-5"></i>
          </button>
        )}

        <button
          className="btn btn-sm text-danger border-0 flex-shrink-0"
          onClick={(e) => {
            e.stopPropagation();
            deleteTask(task.id);
          }}
          disabled={isDeleting}
        >
          <i className="bi bi-trash fs-5"></i>
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
