import { useState, useEffect } from "react";
import { useTaskContext } from "../context/useTaskContext";
import PrioritySelector from "./PrioritySelector";

const TaskEdit = ({ task, onClose }) => {
  const { editTask } = useTaskContext();

  const [updatedTask, setUpdatedTask] = useState(task);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!updatedTask.text.trim()) return;
    editTask(updatedTask.id, updatedTask.text, updatedTask.priority);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="modal d-block bg-dark bg-opacity-75 modal-backdrop"
      tabIndex="-1"
      onClick={handleBackdropClick}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Editar Tarea</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <label htmlFor="text" className="form-label">
                Descripción de la tarea
              </label>
              <input
                name="text"
                id="text"
                type="text"
                className="form-control"
                value={updatedTask.text}
                onChange={handleChange}
                autoFocus
              />
              <PrioritySelector
                value={updatedTask.priority}
                onChange={(val) =>
                  setUpdatedTask((prev) => ({ ...prev, priority: val }))
                }
                name="priority"
                idPrefix="edit-priority"
              />
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-primary d-flex align-items-center gap-2"
                aria-label="Guardar cambios"
              >
                <i className="bi bi-floppy"></i>
                <span className="d-none d-sm-inline">Guardar Cambios</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskEdit;
