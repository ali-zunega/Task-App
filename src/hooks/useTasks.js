import { useState, useEffect } from "react";

export const useTasks = () => {
  //  busca datos en localStorage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("my_tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // guarda en localStorage en cada cambio
  useEffect(() => {
    localStorage.setItem("my_tasks", JSON.stringify(tasks));
  }, [tasks]);

  // adición tareas
  const addTask = (text) => {
    const newTask = { id: crypto.randomUUID(), text, completed: false };
    setTasks((prev) => [...prev, newTask]);
  };

  // eliminación de tareas
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // cambio pendiente a completado
  // marca en el checkbox
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  return { tasks, addTask, deleteTask, toggleTask };
};
