import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
// Layout
import AppLayout from "../layout";
// Pages
import Home from "../pages/main/Home";
const Create = lazy(() => import("../pages/main/Create"));
const Edit = lazy(() => import("../pages/main/Edit"));
const Play = lazy(() => import("../pages/main/Play"));
const Error = lazy(() => import("../pages/common/Error"));
const NoMatch = lazy(() => import("../pages/common/NotMatch"));

export const Routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "create", element: <Create /> },
      { path: "edit/:id", element: <Edit /> },
      { path: "play/:id", element: <Play /> },
      { path: "*", element: <NoMatch /> },
    ],
  },
];
