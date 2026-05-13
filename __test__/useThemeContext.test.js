import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useThemeContext } from "../src/context/useThemeContext";

describe("useThemeContext", () => {
  it("debería lanzar error cuando se usa fuera de ThemeProvider", () => {
    expect(() => {
      renderHook(() => useThemeContext());
    }).toThrow("useThemeContext debe usarse dentro de ThemeProvider");
  });

  it("debería lanzar error con el mensaje exacto en español", () => {
    try {
      renderHook(() => useThemeContext());
    } catch (e) {
      expect(e.message).toContain("ThemeProvider");
    }
  });
});
