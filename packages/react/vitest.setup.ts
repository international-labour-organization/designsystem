import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import { vi } from "vitest";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

Object.defineProperty(HTMLElement.prototype, "offsetParent", {
  get() {
    for (let element = this; element; element = element.parentNode) {
      if (element.style?.display?.toLowerCase() === "none") {
        return null;
      }
    }

    if (this.stye?.position?.toLowerCase() === "fixed") {
      return null;
    }

    if (this.tagName.toLowerCase() in ["html", "body"]) {
      return null;
    }

    return this.parentNode;
  },
});

afterEach(() => {
  cleanup();
});
