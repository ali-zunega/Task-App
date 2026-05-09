import { describe, it, expect, beforeEach, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useTasks } from "../src/hooks/useTasks";

describe("useTasks hook", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it("debería inicializar con array vacío si no hay localStorage", () => {
    const { result } = renderHook(() => useTasks());
    expect(result.current.tasks).toEqual([]);
  });

  it("debería agregar una nueva tarea", () => {
    const { result } = renderHook(() => useTasks());
    
    act(() => {
      result.current.addTask("Nueva tarea");
    });

    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0].text).toBe("Nueva tarea");
    expect(result.current.tasks[0].completed).toBe(false);
  });

  it("debería eliminar una tarea", () => {
    const { result } = renderHook(() => useTasks());
    
    act(() => {
      result.current.addTask("Tarea a eliminar");
    });

    const taskId = result.current.tasks[0].id;

    act(() => {
      result.current.deleteTask(taskId);
    });

    expect(result.current.tasks).toHaveLength(0);
  });

  it("debería togglear el estado de completado", () => {
    const { result } = renderHook(() => useTasks());
    
    act(() => {
      result.current.addTask("Tarea togglear");
    });

    const taskId = result.current.tasks[0].id;
    expect(result.current.tasks[0].completed).toBe(false);

    act(() => {
      result.current.toggleTask(taskId);
    });

    expect(result.current.tasks[0].completed).toBe(true);
  });

  it("debería actualizar searchTerm", () => {
    const { result } = renderHook(() => useTasks());
    
    act(() => {
      result.current.setSearchTerm("buscar");
    });

    expect(result.current.searchTerm).toBe("buscar");
  });

  it("debería actualizar filterStatus", () => {
    const { result } = renderHook(() => useTasks());
    
    act(() => {
      result.current.setFilterStatus("completed");
    });

    expect(result.current.filterStatus).toBe("completed");
  });
});