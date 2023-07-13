export const getBaseUrlFiveDaysForcast = () => {
  return import.meta.env.VITE_REACT_FIVE_DAY_FORECAST;
};

export const getBaseUrlCurrentWeather= () => {
  return import.meta.env.VITE_REACT_CURRENT_WEATHER;
};

export const getApiKeyOpenWeather = () => {
  return import.meta.env.VITE_REACT_APP_OPEN_WEATHER_KEY;
};

export const getApiKeyGoogleAutocomplete = () => {
  return import.meta.env.VITE_REACT_APP_GOOGLE_MAP_AUTOCOMPLETE;
};
