import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import AuthProvider from "./provider/AuthProvider.jsx";
import routers from "./rotues/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={routers} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
