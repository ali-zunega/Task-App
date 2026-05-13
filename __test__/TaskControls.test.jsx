import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskControls from "../src/components/TaskControls";

const mockSetSearchTerm = vi.fn();
const mockSetFilterStatus = vi.fn();

vi.mock("../src/context/useTaskContext", () => ({
  useTaskContext: () => ({
    searchTerm: "",
    setSearchTerm: mockSetSearchTerm,
    filterStatus: "all",
    setFilterStatus: mockSetFilterStatus,
  }),
}));

describe("TaskControls", () => {
  beforeEach(() => {
    mockSetSearchTerm.mockClear();
    mockSetFilterStatus.mockClear();
  });

  it("debería renderizar el input de búsqueda y los botones de filtro", () => {
    render(<TaskControls />);

    expect(screen.getByPlaceholderText(/Buscar tareas/i)).toBeInTheDocument();
    expect(screen.getByText("Todas")).toBeInTheDocument();
    expect(screen.getByText("Pendientes")).toBeInTheDocument();
    expect(screen.getByText("Completadas")).toBeInTheDocument();
  });

  it("debería llamar a setSearchTerm al escribir en el buscador", async () => {
    const user = userEvent.setup();
    render(<TaskControls />);

    const input = screen.getByPlaceholderText(/Buscar tareas/i);
    await user.type(input, "estudiar");

    expect(mockSetSearchTerm).toHaveBeenCalled();
  });

  it("debería llamar a setFilterStatus con 'all' al hacer clic en Todas", async () => {
    const user = userEvent.setup();
    render(<TaskControls />);

    await user.click(screen.getByRole("button", { name: /Todas/i }));

    expect(mockSetFilterStatus).toHaveBeenCalledWith("all");
  });

  it("debería llamar a setFilterStatus con 'pending' al hacer clic en Pendientes", async () => {
    const user = userEvent.setup();
    render(<TaskControls />);

    await user.click(screen.getByRole("button", { name: /Pendientes/i }));

    expect(mockSetFilterStatus).toHaveBeenCalledWith("pending");
  });

  it("debería llamar a setFilterStatus con 'completed' al hacer clic en Completadas", async () => {
    const user = userEvent.setup();
    render(<TaskControls />);

    await user.click(screen.getByRole("button", { name: /Completadas/i }));

    expect(mockSetFilterStatus).toHaveBeenCalledWith("completed");
  });

  it("debería aplicar clase btn-primary al botón activo", () => {
    render(<TaskControls />);

    const todalBtn = screen.getByRole("button", { name: /Todas/i });
    expect(todalBtn).toHaveClass("btn-primary");
  });

  it("debería aplicar clase btn-outline-secondary a los botones inactivos", () => {
    render(<TaskControls />);

    const pendientesBtn = screen.getByRole("button", { name: /Pendientes/i });
    const completadasBtn = screen.getByRole("button", {
      name: /Completadas/i,
    });

    expect(pendientesBtn).toHaveClass("btn-outline-secondary");
    expect(completadasBtn).toHaveClass("btn-outline-secondary");
  });
});
