import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";

const WeatherList = lazy(() => import("./pages/weather-list/WeatherList.page"));
const LoginForm = lazy(() => import("./auth/Login"));

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

function AppWrapper() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="cities" element={<WeatherList />} />
          <Route path="cities/:cityId" element={<div>Specific city</div>} />
        </Route>
        <Route path="login" element={<LoginForm />} />
        <Route path="*" element={<Navigate to={"login"} />} />
      </Routes>
    </BrowserRouter>
  );
}
