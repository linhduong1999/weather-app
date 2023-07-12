import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";

const WeatherList = lazy(() =>
  import("../pages/weather-list/WeatherList.page")
);
const WeatherDetail = lazy(() =>
  import("../pages/weather-detail/WeatherDetail.page")
);
const LoginForm = lazy(() => import("../auth/Login"));
const App = lazy(() => import("../App"));

const AppWrapper = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="cities" element={<WeatherList />} />
          <Route path="cities/:cityId" element={<WeatherDetail />} />
        </Route>
        <Route path="login" element={<LoginForm />} />
        <Route path="*" element={<Navigate to="login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppWrapper;
