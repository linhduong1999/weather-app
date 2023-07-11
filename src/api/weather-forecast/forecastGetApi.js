import axios from 'axios';

const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';

export const useGetForecast = async (lat="51.5073219", lon="-0.1276474") => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        lat: lat,
        lon: lon,
        appid: import.meta.env.VITE_REACT_APP_API_KEY,
      },
    });

    const data = response.data;
    console.log('Forecast data:', data);

    return data; // Added return statement
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error; // Optional: Rethrow the error to handle it outside the function
  }
};
