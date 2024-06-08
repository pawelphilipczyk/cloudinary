import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";

import React from "react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { basename } from "./config";

export function renderWithRouter(
  element: React.ReactElement,
  options?: { path?: string }
) {
  const { path } = options || {};
  const routes = [
    {
      path: "*",
      element,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: [basename + path],
  });

  return render(<RouterProvider router={router} />);
}

export { screen, expect, it };
