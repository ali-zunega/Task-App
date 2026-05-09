import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskItem from "../src/components/TaskItem";

describe("TaskItem", () => {
  const mockToggleTask = vi.fn();
  const mockDeleteTask = vi.fn();

  const task = {
    id: "123",
    text: "tarea de prueba",
    completed: false,
  };

  beforeEach(() => {
    mockToggleTask.mockClear();
    mockDeleteTask.mockClear();
  });

  it("debería renderizar el texto de la tarea", () => {
    render(
      <TaskItem
        task={task}
        toggleTask={mockToggleTask}
        deleteTask={mockDeleteTask}
      />
    );

    expect(screen.getByText("Tarea de prueba")).toBeInTheDocument();
  });

  it("debería mostrar icono de círculo cuando no está completada", () => {
    render(
      <TaskItem
        task={task}
        toggleTask={mockToggleTask}
        deleteTask={mockDeleteTask}
      />
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("debería llamar a toggleTask al hacer click en la tarea", async () => {
    const user = userEvent.setup();
    render(
      <TaskItem
        task={task}
        toggleTask={mockToggleTask}
        deleteTask={mockDeleteTask}
      />
    );

    await user.click(screen.getByText("Tarea de prueba"));
    
    expect(mockToggleTask).toHaveBeenCalledWith("123");
  });

  it("debería llamar a deleteTask al hacer click en el botón de eliminar", async () => {
    const user = userEvent.setup();
    render(
      <TaskItem
        task={task}
        toggleTask={mockToggleTask}
        deleteTask={mockDeleteTask}
      />
    );

    await user.click(screen.getByRole("button"));
    
    expect(mockDeleteTask).toHaveBeenCalledWith("123");
  });

  it("no debería llamar a toggleTask al hacer click en delete (stopPropagation)", async () => {
    const user = userEvent.setup();
    render(
      <TaskItem
        task={task}
        toggleTask={mockToggleTask}
        deleteTask={mockDeleteTask}
      />
    );

    const deleteButton = screen.getByRole("button");
    await user.click(deleteButton);
    
    expect(mockToggleTask).not.toHaveBeenCalled();
  });

  it("debería renderizar con clase completed cuando está completada", () => {
    const completedTask = { ...task, completed: true };
    
    render(
      <TaskItem
        task={completedTask}
        toggleTask={mockToggleTask}
        deleteTask={mockDeleteTask}
      />
    );

    const span = screen.getByText("Tarea de prueba");
    expect(span).toHaveClass("text-decoration-line-through");
  });
});