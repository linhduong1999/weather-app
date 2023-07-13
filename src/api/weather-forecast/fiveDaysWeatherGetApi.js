import { useState, useEffect } from "react";
import axios from "axios";
import { getFiveDaysData } from "../../utils/transformData";
import {
  getBaseUrlFiveDaysForcast,
  getApiKeyOpenWeather,
} from "../../utils/environment";

export const useGetFiveDaysForecast = (lat, lon, tempUnits) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(getBaseUrlFiveDaysForcast(), {
          params: {
            lat: lat,
            lon: lon,
            units: tempUnits,
            appid: getApiKeyOpenWeather(),
          },
        });

        const transformedData = getFiveDaysData(response.data.list);
        setData(transformedData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setIsError(true);
      }
    };

    fetchData();
  }, [lat, lon, tempUnits]);

  return { data, isLoading, isError };
};
