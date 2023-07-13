import { useState, useCallback, useMemo } from "react";
import axios from "axios";
import { extractWeatherData } from "../../utils/transformData";
import {
  getApiKeyOpenWeather,
  getBaseUrlCurrentWeather,
} from "../../utils/environment";

export const useGetCurrentForecast = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetch = useCallback(async (lat, lon) => {
    try {
      setIsLoading(true);
      const response = await axios.get(getBaseUrlCurrentWeather(), {
        params: {
          lat: lat,
          lon: lon,
          appid: getApiKeyOpenWeather(),
        },
      });

      const transformedData = extractWeatherData(response.data);
      setData(transformedData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setIsError(true);
      setIsLoading(false);
    }
  }, []);

  const memoizedFetch = useMemo(() => fetch, [fetch]);

  return { data, isLoading, isError, fetch: memoizedFetch };
};
