import { useState } from "react";
import { useTaskContext } from "../context/useTaskContext";

function TaskInput() {
  const { addTask } = useTaskContext();
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text, priority || "medium");
    setText("");
    setPriority("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="input-group input-group-md mb-3 shadow-sm"
    >
      <input
        id="task-input"
        name="task-input"
        type="text"
        className="form-control"
        placeholder="Ej. Estudiar React..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        enterKeyHint="done"
        autoComplete="off"
      />
      <select
        id="priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="form-select form-select-sm"
        style={{ maxWidth: "120px" }}
        aria-label="Seleccionar prioridad"
      >
        <option value="" disabled>
          Prioridad
        </option>
        <option value="medium">Media</option>
        <option value="low">Baja</option>
        <option value="high">Alta</option>
      </select>

      <button
        className="btn btn-primary d-flex align-items-center gap-2"
        type="submit"
      >
        <i className="bi bi-plus-lg"></i>
        <span className="d-none d-sm-inline">Agregar</span>
      </button>
    </form>
  );
}

export default TaskInput;
