import { describe, it, expect } from "vitest";
import {
  capitalizeFirstLetter,
  getPriorityColor,
  getPriorityLabel,
  PRIORITY_COLORS,
  PRIORITY_LABELS,
} from "../src/utils/formatText";

describe("capitalizeFirstLetter", () => {
  it("debería capitalizar la primera letra de un texto", () => {
    expect(capitalizeFirstLetter("hola mundo")).toBe("Hola mundo");
  });

  it("debería manejar texto ya capitalizado", () => {
    expect(capitalizeFirstLetter("Hola Mundo")).toBe("Hola mundo");
  });

  it("debería manejar texto vacío", () => {
    expect(capitalizeFirstLetter("")).toBe("");
  });

  it("debería manejar null/undefined", () => {
    expect(capitalizeFirstLetter(null)).toBe("");
    expect(capitalizeFirstLetter(undefined)).toBe("");
  });

  it("debería manejar texto con una sola letra", () => {
    expect(capitalizeFirstLetter("a")).toBe("A");
  });
});

describe("PRIORITY_COLORS", () => {
  it("debería tener los colores correctos para cada prioridad", () => {
    expect(PRIORITY_COLORS.high).toBe("danger");
    expect(PRIORITY_COLORS.medium).toBe("warning");
    expect(PRIORITY_COLORS.low).toBe("success");
  });
});

describe("getPriorityColor", () => {
  it("debería retornar danger para high", () => {
    expect(getPriorityColor("high")).toBe("danger");
  });

  it("debería retornar warning para medium", () => {
    expect(getPriorityColor("medium")).toBe("warning");
  });

  it("debería retornar success para low", () => {
    expect(getPriorityColor("low")).toBe("success");
  });

  it("debería retornar secondary para prioridad desconocida", () => {
    expect(getPriorityColor("unknown")).toBe("secondary");
  });
});

describe("PRIORITY_LABELS", () => {
  it("debería tener las etiquetas correctas en español", () => {
    expect(PRIORITY_LABELS.high).toBe("Alta");
    expect(PRIORITY_LABELS.medium).toBe("Media");
    expect(PRIORITY_LABELS.low).toBe("Baja");
  });
});

describe("getPriorityLabel", () => {
  it("debería retornar Alta para high", () => {
    expect(getPriorityLabel("high")).toBe("Alta");
  });

  it("debería retornar Media para medium", () => {
    expect(getPriorityLabel("medium")).toBe("Media");
  });

  it("debería retornar Baja para low", () => {
    expect(getPriorityLabel("low")).toBe("Baja");
  });

  it("debería capitalizar prioridad desconocida", () => {
    expect(getPriorityLabel("custom")).toBe("Custom");
  });
});