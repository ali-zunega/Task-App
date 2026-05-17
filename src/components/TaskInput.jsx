import { useState } from "react";
import { useTaskContext } from "../context/useTaskContext";
import PrioritySelector from "./PrioritySelector";

function TaskInput() {
  const { addTask } = useTaskContext();
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text, priority);
    setText("");
    setPriority("medium");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="mb-2">
        {/* Input para agregar la tarea */}
        <input
          id="task-input"
          name="task-input"
          type="text"
          className="form-control shadow-sm"
          placeholder="Ej. Estudiar React..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          enterKeyHint="done"
          autoComplete="off"
        />
      </div>
      <div className="d-flex flex-column flex-sm-row align-items-stretch gap-2">
        <div className="flex-grow-1">
          <PrioritySelector value={priority} onChange={setPriority} />
        </div>
        <button
          className="btn btn-primary shadow-sm d-flex align-items-center justify-content-center gap-2"
          type="submit"
          aria-label="Agregar tarea"
        >
          <i className="bi bi-plus-lg"></i>
          <span className="d-none d-lg-inline">Agregar</span>
        </button>
      </div>
    </form>
  );
}

export default TaskInput;
