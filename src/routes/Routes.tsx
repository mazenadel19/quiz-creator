import type { RouteObject } from "react-router-dom";
// Layout
import AppLayout from "../layout";
// Pages
import { Home, Create, Edit, Error, NoMatch } from "../pages";

export const Routes = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "create", element: <Create /> },
      { path: "edit/:id", element: <Edit /> },
      { path: "*", element: <NoMatch /> },
    ],
  },
] satisfies RouteObject[]
