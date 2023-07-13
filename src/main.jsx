import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import AppWrapper from "./auth/AppWrapper.jsx";
import { CircularProgress } from "@mui/material";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Suspense fallback={<CircularProgress />}>
      <AppWrapper />
    </Suspense>
  </React.StrictMode>
);
