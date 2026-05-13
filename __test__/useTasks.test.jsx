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

  it("debería agregar una nueva tarea con prioridad por defecto medium", () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask("Nueva tarea");
    });

    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0].text).toBe("Nueva tarea");
    expect(result.current.tasks[0].completed).toBe(false);
    expect(result.current.tasks[0].priority).toBe("medium");
  });

  it("debería agregar una nueva tarea con prioridad custom", () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask("Tarea alta", "high");
    });

    expect(result.current.tasks[0].priority).toBe("high");
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

  it("debería guardar en localStorage al agregar una tarea", () => {
    const setItemSpy = vi.spyOn(Storage.prototype, "setItem");
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask("Tarea persistente");
    });

    expect(setItemSpy).toHaveBeenCalledWith(
      "my_tasks",
      expect.any(String),
    );

    const savedTasks = JSON.parse(setItemSpy.mock.calls.at(-1)[1]);
    expect(savedTasks).toHaveLength(1);
    expect(savedTasks[0].text).toBe("Tarea persistente");
  });

  it("debería actualizar localStorage al eliminar una tarea", () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask("Tarea a eliminar");
    });

    const taskId = result.current.tasks[0].id;

    const setItemSpy = vi.spyOn(Storage.prototype, "setItem");

    act(() => {
      result.current.deleteTask(taskId);
    });

    const savedTasks = JSON.parse(setItemSpy.mock.calls.at(-1)[1]);
    expect(savedTasks).toHaveLength(0);
  });

  it("debería cargar tareas desde localStorage al iniciar", () => {
    const tasks = [{ id: "1", text: "Tarea guardada", completed: false, priority: "medium" }];
    localStorage.setItem("my_tasks", JSON.stringify(tasks));

    const { result } = renderHook(() => useTasks());

    expect(result.current.tasks).toEqual(tasks);
  });

  it("debería limpiar searchTerm y filterStatus al eliminar la última tarea", () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask("Única tarea");
    });

    act(() => {
      result.current.setSearchTerm("algo");
      result.current.setFilterStatus("completed");
    });

    const taskId = result.current.tasks[0].id;

    act(() => {
      result.current.deleteTask(taskId);
    });

    expect(result.current.searchTerm).toBe("");
    expect(result.current.filterStatus).toBe("all");
  });
});