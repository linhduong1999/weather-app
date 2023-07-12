import { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = "https://api.openweathermap.org/data/2.5/forecast";

export const useGetFiveDaysForecast = (lat, lon, tempUnits = "metric") => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getFiveDaysForecast = async () => {
      try {
        const response = await axios.get(apiUrl, {
          params: {
            lat: lat,
            lon: lon,
            units: tempUnits,
            appid: import.meta.env.VITE_REACT_APP_API_KEY,
          },
        });

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setIsError(true);
      }
    };

    getFiveDaysForecast();
  }, [lat, lon, tempUnits]);

  return { data, isLoading, isError };
};
