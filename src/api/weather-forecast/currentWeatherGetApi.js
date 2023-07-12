import axios from "axios";
import { extractWeatherData } from "../../utils/transformCurrentWeather";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

export const useGetCurrentForecast = async (lat, lon, name) => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        lat: lat,
        lon: lon,
        appid: import.meta.env.VITE_REACT_APP_API_KEY,
      },
    });

    const transformedData = extractWeatherData(response.data, name);

    return transformedData; // Added return statement
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error; // Optional: Rethrow the error to handle it outside the function
  }
};
