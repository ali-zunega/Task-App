import { useState, useEffect } from "react";

export const useTasks = () => {
  // estado inicial con lo de localStorage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("my_tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // guarda lo nuevo en localStorage
  useEffect(() => {
    localStorage.setItem("my_tasks", JSON.stringify(tasks));
  }, [tasks]);

  // agrega de tareas
  // por defecto asignamos prioridad media
  const addTask = (text, priority) => {
    const newTask = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      priority: priority || "medium",
    };
    setTasks((prev) => [...prev, newTask]);
  };

  // elimina de tareas
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);

    if (updatedTasks.length === 0) {
      setSearchTerm("");
      setFilterStatus("all");
    }
  };

  // cambio de estado completado
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  // editar tarea
  const editTask = (id, newText, newPriority) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, text: newText, priority: newPriority } : t,
      ),
    );
  };

  return {
    tasks,
    addTask,
    deleteTask,
    toggleTask,
    editTask,
    searchTerm,
    setSearchTerm,
    filterStatus,
    setFilterStatus,
  };
};
