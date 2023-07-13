import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import AppWrapper from "./auth/AppWrapper.jsx";
import { CircularProgress } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme.js";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<CircularProgress />}>
        <AppWrapper />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);
