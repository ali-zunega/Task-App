import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import TaskInput from "../src/components/TaskInput";

const mockAddTask = vi.fn();

vi.mock("../src/context/useTaskContext", () => ({
  useTaskContext: () => ({
    addTask: mockAddTask,
  }),
}));

describe("TaskInput", () => {
  beforeEach(() => {
    mockAddTask.mockClear();
  });

  it("debería renderizar el input y el botón", () => {
    render(<TaskInput />);

    expect(screen.getByPlaceholderText(/Estudiar React/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Agregar/i }),
    ).toBeInTheDocument();
  });

  it("debería permitir escribir en el input", async () => {
    const user = userEvent.setup();
    render(<TaskInput />);

    const input = screen.getByPlaceholderText(/Estudiar React/i);
    await user.type(input, "Nueva tarea de prueba");

    expect(input.value).toBe("Nueva tarea de prueba");
  });

  it("debería llamar a addTask al hacer submit con texto y prioridad por defecto", async () => {
    const user = userEvent.setup();
    render(<TaskInput />);

    const input = screen.getByPlaceholderText(/Estudiar React/i);
    await user.type(input, "Tarea submit");
    await user.keyboard("{Enter}");

    expect(mockAddTask).toHaveBeenCalledWith("Tarea submit", "medium");
  });

  it("debería limpiar el input después de agregar", async () => {
    const user = userEvent.setup();
    render(<TaskInput />);

    const input = screen.getByPlaceholderText(/Estudiar React/i);
    await user.type(input, "Limpiar después");
    await user.keyboard("{Enter}");

    expect(input.value).toBe("");
  });

  it("no debería agregar tarea vacía", async () => {
    const user = userEvent.setup();
    render(<TaskInput />);

    const button = screen.getByRole("button", { name: /Agregar/i });
    await user.click(button);

    expect(mockAddTask).not.toHaveBeenCalled();
  });

  it("no debería agregar solo espacios en blanco", async () => {
    const user = userEvent.setup();
    render(<TaskInput />);

    const input = screen.getByPlaceholderText(/Estudiar React/i);
    await user.type(input, "   ");
    await user.keyboard("{Enter}");

    expect(mockAddTask).not.toHaveBeenCalled();
  });

  it("debería cambiar la prioridad al seleccionar una opción", async () => {
    const user = userEvent.setup();
    render(<TaskInput />);

    const radio = screen.getByLabelText("Alta");
    await user.click(radio);

    expect(radio).toBeChecked();
  });

  it("debería llamar a addTask con la prioridad seleccionada", async () => {
    const user = userEvent.setup();
    render(<TaskInput />);

    const input = screen.getByPlaceholderText(/Estudiar React/i);
    const radio = screen.getByLabelText("Alta");

    await user.type(input, "Tarea urgente");
    await user.click(radio);
    await user.click(screen.getByRole("button", { name: /Agregar/i }));

    expect(mockAddTask).toHaveBeenCalledWith("Tarea urgente", "high");
  });

  it("debería llamar a addTask al hacer clic en el botón Agregar", async () => {
    const user = userEvent.setup();
    render(<TaskInput />);

    const input = screen.getByPlaceholderText(/Estudiar React/i);
    await user.type(input, "Tarea con botón");
    await user.click(screen.getByRole("button", { name: /Agregar/i }));

    expect(mockAddTask).toHaveBeenCalledWith("Tarea con botón", "medium");
  });
});
