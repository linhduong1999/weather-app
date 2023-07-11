import {useGetGeoCoding} from "./api/geocoding/geoCodingGetApi"
import {useGetForecast} from "./api/weather-forecast/forecastGetApi"
import WeatherList from "./pages/weather-list/WeatherList";

function App() {
  const data = useGetForecast();
  return <><WeatherList/></>;
}

export default App;
