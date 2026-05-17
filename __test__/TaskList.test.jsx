import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, act, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskList from "../src/components/TaskList";

const mockDeleteTask = vi.fn();
const mockToggleTask = vi.fn();

const mockContext = {
  filteredTasks: [],
  deleteTask: mockDeleteTask,
  toggleTask: mockToggleTask,
  filterStatus: "all",
  searchTerm: "",
  tasks: [],
};

vi.mock("../src/context/useTaskContext", () => ({
  useTaskContext: () => mockContext,
}));

const createTask = (overrides = {}) => ({
  id: "1",
  text: "Tarea de prueba",
  completed: false,
  priority: "medium",
  ...overrides,
});

describe("TaskList", () => {
  beforeEach(() => {
    mockDeleteTask.mockClear();
    mockToggleTask.mockClear();
    mockContext.filteredTasks = [];
    mockContext.filterStatus = "all";
    mockContext.searchTerm = "";
    mockContext.tasks = [];
  });

  it("debería mostrar mensaje vacío cuando no hay tareas", () => {
    render(<TaskList />);
    expect(screen.getByText(/No hay tareas pendientes/i)).toBeInTheDocument();
  });

  it("debería mostrar mensaje de completadas cuando filterStatus es completed y no hay tareas", () => {
    mockContext.filterStatus = "completed";
    render(<TaskList />);
    expect(
      screen.getByText(/Has completado todas tus tareas/i),
    ).toBeInTheDocument();
  });

  it("debería renderizar un TaskItem por cada tarea", () => {
    mockContext.filteredTasks = [
      createTask({ id: "1", text: "Primera tarea" }),
      createTask({ id: "2", text: "Segunda tarea" }),
    ];
    render(<TaskList />);
    expect(screen.getByText("Primera tarea")).toBeInTheDocument();
    expect(screen.getByText("Segunda tarea")).toBeInTheDocument();
  });

  it("debería llamar a toggleTask al hacer clic en el texto de una tarea", async () => {
    const user = userEvent.setup();
    mockContext.filteredTasks = [createTask()];
    render(<TaskList />);

    await user.click(screen.getByText("Tarea de prueba"));

    expect(mockToggleTask).toHaveBeenCalledWith("1");
  });

  it("debería llamar a deleteTask después de la animación al hacer clic en eliminar", () => {
    vi.useFakeTimers();

    mockContext.filteredTasks = [createTask()];
    render(<TaskList />);

    const buttons = screen.getAllByRole("button");
    const deleteButton = buttons[buttons.length - 1];
    fireEvent.click(deleteButton);

    expect(mockDeleteTask).not.toHaveBeenCalled();
    expect(mockToggleTask).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(400);
    });

    expect(mockDeleteTask).toHaveBeenCalledWith("1");

    vi.useRealTimers();
  });
});
