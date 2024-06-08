import type { Meta, StoryObj } from "@storybook/react";
import { SearchForm } from "./SearchForm";

import React from "react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { basename } from "../config";

function renderWithRouter(
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

  return <RouterProvider router={router} />;
}

 const meta: Meta<typeof SearchForm> = {
  title: "SearchForm",
  component: SearchForm,
  decorators: [
    (Story) => renderWithRouter(<Story />, { path: "/images" }),
  ],
};

type Story = StoryObj<typeof SearchForm>;

export const Empty: Story = {
  args: {
    q: "",
  },
};

export const DefaultValue: Story = {
  args: {
    q: "hello!",
  },
};

export default meta;