import axios from "axios";
import { extractWeatherData } from "../../utils/transformData";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

export const useGetCurrentForecast = async (lat, lon) => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        lat: lat,
        lon: lon,
        appid: import.meta.env.VITE_REACT_APP_API_KEY,
      },
    });

    const transformedData = extractWeatherData(response.data);

    return transformedData; // Added return statement
  } catch (error) {
    window.alert("An error occurred while fetching the current forecast."); // Display the error message as a window alert
    throw error;
  }
};
