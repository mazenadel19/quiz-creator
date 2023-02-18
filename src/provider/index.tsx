import { Suspense } from 'react';
// Store
import QuizeProvider from "../store/QuizProvider";

// MUI
import { Stack, CssBaseline } from "@mui/material";

interface IAppProvider {
  children: React.ReactNode;
};

const AppProvider = ({ children }: IAppProvider) => (
  <Suspense
    fallback={
      <Stack alignItems={"center"} justifyContent={"center"} minHeight={100} minWidth={100}>
        loading...
      </Stack>
    }
  >
    <QuizeProvider>
      <CssBaseline />
      {children}
    </QuizeProvider>
  </Suspense>
);

export default AppProvider;
