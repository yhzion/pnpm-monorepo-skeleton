import { hello } from "@mmlp/core";

// 메시지를 생성하는 순수 함수
export function createMessage(name: string): string {
  return hello(name);
}

// DOM 요소를 찾는 함수
export function findRootElement(): HTMLElement {
  const rootElement = document.getElementById("root");
  if (!rootElement) throw new Error("Root element not found");
  return rootElement;
}

// DOM을 업데이트하는 함수
export function updateDOM(element: HTMLElement, message: string): void {
  element.append(message);
}

// 메인 초기화 함수
export function initializeApp(): void {
  if (typeof document !== "undefined") {
    const rootElement = findRootElement();
    const message = createMessage("World");
    updateDOM(rootElement, message);
  }
}

// 테스트 환경이 아닐 때만 자동으로 초기화
if (typeof document !== "undefined" && process.env.NODE_ENV !== "test") {
  initializeApp();
}
