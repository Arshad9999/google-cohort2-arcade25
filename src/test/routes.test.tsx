import React from "react";
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import App from "../App";

afterEach(() => { cleanup(); window.history.replaceState({}, "", "/"); });

describe("application routes", () => {
  it("shows a not-found page for an unknown path", () => {
    window.history.replaceState({}, "", "/missing-audit-route");
    const { container } = render(<App />);
    expect(container.textContent).toContain("404");
    const home = container.querySelector('a[href="/"]');
    expect(home).not.toBeNull();
  });

  it("renders its documented secondary route", () => {
    window.history.replaceState({}, "", "/calculator");
    const { container } = render(<App />);
    expect(container.textContent).not.toContain("Oops! Page not found");
    expect(container.querySelector("h1, h2")).not.toBeNull();
  });
});
