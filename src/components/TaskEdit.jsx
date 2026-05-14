import { useState } from "react";
import { useTaskContext } from "../context/useTaskContext";

const TaskEdit = ({ task, onClose }) => {
  const { editTask } = useTaskContext();

  const [updatedTask, setUpdatedTask] = useState(task);

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

  return (
    <div className="modal d-block bg-dark bg-opacity-50" tabIndex="-1">
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
              <label className="form-label">Descripción de la tarea</label>
              <input
                name="text"
                id="text"
                type="text"
                className="form-control"
                value={updatedTask.text}
                onChange={handleChange}
                autoFocus
              />
              <label className="form-label mt-3">Prioridad</label>
              <select
                name="priority"
                id="priority"
                className="form-select w-auto"
                value={updatedTask.priority}
                onChange={handleChange}
              >
                <option value="low">Baja</option>
                <option value="medium">Media</option>
                <option value="high">Alta</option>
              </select>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-primary d-flex align-items-center gap-2"
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
