import axios from 'axios';

const apiUrl = 'https://api.openweathermap.org/geo/1.0/direct';

export const useGetGeoCoding = async (city = 'London') => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        q: city,
        appid: import.meta.env.VITE_REACT_APP_API_KEY,
      },
    });

    const data = response.data;
    console.log('london geo', data);

    return data; // Added return statement
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error; // Optional: Rethrow the error to handle it outside the function
  }
};
