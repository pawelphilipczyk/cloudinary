import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";

import ErrorPage from "./error-page.js";
import "./index.css";
import ImageDetails, { loader as imageLoader } from "./routes/images-details.js";
import ImagesIndex from "./routes/images-index.js";
import Images, { loader as imagesLoader } from "./routes/images.js";
import Root from "./routes/root.js";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root children={<Outlet />} />,
      errorElement: <ErrorPage />,

      children: [
        {
          index: true,
          element: <Navigate to="images" />,
        },
        {
          errorElement: <ErrorPage />,
          path: "images",
          id: "images",
          loader: imagesLoader,
          element: <Images children={<Outlet />} />,
          children: [
            {
              index: true,
              element: <ImagesIndex />,
            },
            {
              path: ":imageId",
              loader: imageLoader,
              element: <ImageDetails />,
            },
          ],
        },
      ],
    },
  ],
  { basename: "/cloudinary" }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
