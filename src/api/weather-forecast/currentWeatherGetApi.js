import { useState, useCallback } from "react";
import axios from "axios";
import { extractWeatherData } from "../../utils/transformData";
import {
  getApiKeyOpenWeather,
  getBaseUrlCurrentWeather,
} from "../../utils/environment";

export const useGetCurrentForecast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = useCallback(async (lat, lon) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await axios.get(getBaseUrlCurrentWeather(), {
        params: {
          lat: lat,
          lon: lon,
          appid: getApiKeyOpenWeather(),
        },
      });

      const transformedData = extractWeatherData(response.data);

      setIsLoading(false);

      return transformedData;
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      window.alert("An error occurred while fetching the current forecast."); // Display the error message as a window alert
      throw error;
    }
  }, []);

  return { fetchData, isLoading, isError };
};
