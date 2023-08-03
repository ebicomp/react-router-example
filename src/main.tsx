import React from "react";
import "./index.css";

import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import FlexPage from "./routes/flexpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/flex",
    element: <FlexPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
