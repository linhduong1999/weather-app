import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import LoginForm from "./auth/Login.jsx";
import useUserStore from "./store/useUserStore";
import { useStore } from "zustand";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

function AppWrapper() {
  const user = useStore(useUserStore);
  return user ? <App /> : <LoginForm />;
}
