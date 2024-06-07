import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Root from "./routes/root.js";
import ErrorPage from "./error-page.js";
import "./index.css";
import Images, { loader as rootLoader } from "./routes/images.js";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root children={<Outlet />} />,
      errorElement: <ErrorPage />,
      children: [
        {
          errorElement: <ErrorPage />,
          index: true,
          loader: rootLoader,
          element: <Images />,
        },
      ],
    },
  ],
  { basename: "/clodinary" }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
