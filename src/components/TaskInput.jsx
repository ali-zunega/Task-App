import { useState } from "react";

function TaskInput({ addTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="input-group input-group-lg mb-3 shadow-sm"
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
      <button
        className="btn btn-dark d-flex align-items-center gap-2"
        type="submit"
      >
        <i className="bi bi-plus-lg"></i>
        <span className="d-none d-sm-inline">Agregar</span>
      </button>
    </form>
  );
}

export default TaskInput;
