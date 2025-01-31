import { describe, it, expect } from "vitest";
import { helloCore } from "../index";

describe("helloCore", () => {
  it('should return "Hello from Core!"', () => {
    expect(helloCore()).toBe("Hello from Core!");
  });
});
