import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {
  createMessage,
  findRootElement,
  updateDOM,
  initializeApp,
} from "../main";

describe("main", () => {
  describe("createMessage", () => {
    it("should create correct message", () => {
      expect(createMessage("Test")).toContain("Test");
    });
  });

  describe("DOM 관련 함수들", () => {
    let mockRoot: HTMLElement;

    beforeEach(() => {
      // 기존 root 요소가 있다면 제거
      const existingRoot = document.getElementById("root");
      if (existingRoot) {
        existingRoot.remove();
      }

      mockRoot = document.createElement("div");
      mockRoot.id = "root";
      document.body.appendChild(mockRoot);
    });

    afterEach(() => {
      mockRoot.remove();
    });

    it("findRootElement should find root element", () => {
      const element = findRootElement();
      expect(element).toBe(mockRoot);
    });

    it("findRootElement should throw error when root not found", () => {
      mockRoot.remove();
      expect(() => findRootElement()).toThrow("Root element not found");
    });

    it("updateDOM should append message to element", () => {
      const element = document.createElement("div");
      const message = "Test Message";
      updateDOM(element, message);
      expect(element.textContent).toContain(message);
    });
  });

  describe("initializeApp", () => {
    let mockRoot: HTMLElement;

    beforeEach(() => {
      const existingRoot = document.getElementById("root");
      if (existingRoot) {
        existingRoot.remove();
      }

      mockRoot = document.createElement("div");
      mockRoot.id = "root";
      document.body.appendChild(mockRoot);
    });

    afterEach(() => {
      mockRoot.remove();
    });

    it("should initialize app correctly", () => {
      initializeApp();
      expect(mockRoot.textContent).toContain("World");
    });
  });
});
