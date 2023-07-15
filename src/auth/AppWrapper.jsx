import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { styled } from "@mui/material/styles";

const WeatherList = lazy(() =>
  import("../pages/weather-list/WeatherList.page")
);
const WeatherDetail = lazy(() =>
  import("../pages/weather-detail/WeatherDetail.page")
);
const LoginForm = lazy(() => import("../auth/Login"));
const App = lazy(() => import("../App"));
const Setting = lazy(() => import("../pages/setting/Setting.page"));

const AppWrapper = () => {
  return (
    <Container>
      <BrowserRouter basename="/" exact>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<App />} exact>
              <Route path="cities" element={<WeatherList />} />
              <Route path="cities/:cityId" element={<WeatherDetail />} />
              <Route path="setting" element={<Setting />} />
            </Route>
            <Route path="login" element={<LoginForm />} />
            <Route path="*" element={<Navigate to="login" />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Container>
  );
};

const Container = styled("div")(
  ({ theme }) => `
  background-color: #f7f6f9;
  padding: ${theme.spacing(1)};
`
);

export default AppWrapper;
