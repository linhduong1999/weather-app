import { lazy, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Logout from "./auth/LogOut";
import Search from "./pages/weather-list/Search"
const WeatherList = lazy(() => import("./pages/weather-list/WeatherList.page"));
const Login = () => import("./auth/Login.jsx");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "cities",
        element: <WeatherList />,
      },
      {
        path: "cities/:citiesId",
        element: <WeatherList />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <>
      <Search />
      <Logout />
      <Outlet />
    </>
  );
}

export default App;
