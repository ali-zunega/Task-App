import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useTaskContext } from "../src/context/useTaskContext";

describe("useTaskContext", () => {
  it("debería lanzar error cuando se usa fuera de TaskProvider", () => {
    expect(() => {
      renderHook(() => useTaskContext());
    }).toThrow("useTaskContext debe usarse dentro de un TaskProvider");
  });

  it("debería lanzar error con el mensaje exacto en español", () => {
    try {
      renderHook(() => useTaskContext());
    } catch (e) {
      expect(e.message).toContain("TaskProvider");
    }
  });
});
