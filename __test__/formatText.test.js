import { describe, it, expect } from "vitest";
import { capitalizeFirstLetter } from "../src/utils/formatText";

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