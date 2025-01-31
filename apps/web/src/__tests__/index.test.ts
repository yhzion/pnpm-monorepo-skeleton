import { describe, it, expect } from 'vitest';
import { helloWeb } from "../index";

describe('helloWeb', () => {
  it('should return "Hello from Web!"', () => {
    expect(helloWeb()).toBe('Hello from Web!');
  });
});