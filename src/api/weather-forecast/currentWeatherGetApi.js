import axios from "axios";
import { extractWeatherData } from "../../utils/transformData";
import {
  getApiKeyOpenWeather,
  getBaseUrlCurrentWeather,
} from "../../utils/environment";

export const useGetCurrentForecast = async (lat, lon) => {
  try {
    const response = await axios.get(getBaseUrlCurrentWeather(), {
      params: {
        lat: lat,
        lon: lon,
        appid: getApiKeyOpenWeather(),
      },
    });

    const transformedData = extractWeatherData(response.data);

    return transformedData; // Added return statement
  } catch (error) {
    window.alert("An error occurred while fetching the current forecast."); // Display the error message as a window alert
    throw error;
  }
};
