import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routes } from "./Routes";

export const AppRoutes = () => {
  const router = createBrowserRouter([...Routes]);
  return <RouterProvider router={router} />;
};
