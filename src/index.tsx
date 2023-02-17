import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
// Context
import QuizeProvider from "./store/QuizProvider";
// Components
import App from "./App";
// MUI
import CssBaseline from "@mui/material/CssBaseline";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <QuizeProvider>
    <CssBaseline />
    <App />
    </QuizeProvider>
  </StrictMode>
);
