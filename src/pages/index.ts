import { lazy } from "react";

import Home from "./main/Home";
const Create = lazy(() => import("./main/Create"));
const Edit = lazy(() => import("./main/Edit"));
const Play = lazy(() => import("./main/Play"));
const Error = lazy(() => import("./common/Error"));
const NoMatch = lazy(() => import("./common/NotMatch"));

export { Home, Create, Edit, Play, Error, NoMatch };
