import { describe, it, expect, vi, beforeEach } from "vitest";
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
    priority: "medium",
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
      />,
    );

    expect(screen.getByText("Tarea de prueba")).toBeInTheDocument();
  });

  it("debería mostrar icono de círculo cuando no está completada", () => {
    render(
      <TaskItem
        task={task}
        toggleTask={mockToggleTask}
        deleteTask={mockDeleteTask}
      />,
    );

    const circleIcon = document.querySelector(".bi-circle");
    expect(circleIcon).toBeInTheDocument();
  });

  it("debería llamar a toggleTask al hacer click en la tarea", async () => {
    const user = userEvent.setup();
    render(
      <TaskItem
        task={task}
        toggleTask={mockToggleTask}
        deleteTask={mockDeleteTask}
      />,
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
      />,
    );

    const buttons = screen.getAllByRole("button");
    const deleteButton = buttons[buttons.length - 1];
    await user.click(deleteButton);

    expect(mockDeleteTask).toHaveBeenCalledWith("123");
  });

  it("no debería llamar a toggleTask al hacer click en delete (stopPropagation)", async () => {
    const user = userEvent.setup();
    render(
      <TaskItem
        task={task}
        toggleTask={mockToggleTask}
        deleteTask={mockDeleteTask}
      />,
    );

    const buttons = screen.getAllByRole("button");
    const deleteButton = buttons[buttons.length - 1];
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
      />,
    );

    const span = screen.getByText("Tarea de prueba");
    expect(span).toHaveClass("text-decoration-line-through");
  });

  it("debería renderizar el badge con la prioridad", () => {
    render(
      <TaskItem
        task={task}
        toggleTask={mockToggleTask}
        deleteTask={mockDeleteTask}
      />,
    );

    expect(screen.getByText("Media")).toBeInTheDocument();
    expect(screen.getByText("Media")).toHaveClass("badge");
  });

  it("debería renderizar badge con color correcto según prioridad", () => {
    const highPriorityTask = { ...task, priority: "high" };
    const lowPriorityTask = { ...task, priority: "low" };

    const { rerender } = render(
      <TaskItem
        task={highPriorityTask}
        toggleTask={mockToggleTask}
        deleteTask={mockDeleteTask}
      />,
    );

    expect(screen.getByText("Alta")).toHaveClass("bg-danger");

    rerender(
      <TaskItem
        task={lowPriorityTask}
        toggleTask={mockToggleTask}
        deleteTask={mockDeleteTask}
      />,
    );

    expect(screen.getByText("Baja")).toHaveClass("bg-success");
  });

  it("debería mostrar clase deleting cuando isDeleting es true", () => {
    render(
      <TaskItem
        task={task}
        toggleTask={mockToggleTask}
        deleteTask={mockDeleteTask}
        isDeleting={true}
      />,
    );

    const container = screen
      .getByText("Tarea de prueba")
      .closest(".list-group-item");
    expect(container).toHaveClass("deleting");
  });

  it("debería deshabilitar el botón de eliminar cuando isDeleting es true", () => {
    render(
      <TaskItem
        task={task}
        toggleTask={mockToggleTask}
        deleteTask={mockDeleteTask}
        isDeleting={true}
      />,
    );

    const buttons = screen.getAllByRole("button");
    const deleteBtn = buttons[buttons.length - 1];
    expect(deleteBtn).toBeDisabled();
  });

  it("debería habilitar el botón de eliminar cuando isDeleting es false o undefined", () => {
    render(
      <TaskItem
        task={task}
        toggleTask={mockToggleTask}
        deleteTask={mockDeleteTask}
      />,
    );

    const buttons = screen.getAllByRole("button");
    const deleteBtn = buttons[buttons.length - 1];
    expect(deleteBtn).not.toBeDisabled();
  });
});
