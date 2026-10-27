import { vi } from "vitest";

// jsdom omits browser APIs used by toast themes and viewport animations.
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false, media: query, onchange: null,
    addListener: vi.fn(), removeListener: vi.fn(),
    addEventListener: vi.fn(), removeEventListener: vi.fn(), dispatchEvent: vi.fn(),
  }),
});
vi.stubGlobal("IntersectionObserver", class {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
});
window.scrollTo = vi.fn();
