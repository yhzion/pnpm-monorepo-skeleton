import { describe, it, expect } from "vitest";
import { hello } from "../index";

describe("hello", () => {
  it('should return "Hello World!"', () => {
    expect(hello("World")).toBe("Hello World!");
  });
});
