import { formatDate } from "./formatDate";

// Converts Kelvin to Celsius
const toCelsius = (kelvin) => Math.round(kelvin - 273.15);

// Converts Kelvin to Fahrenheit
const toFahrenheit = (kelvin) => Math.round(((kelvin - 273.15) * 9) / 5 + 32);

export const capitalizeFirstLetter = (text) => {
  const words = text.split(" ");
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(" ");
};

export const extractWeatherData = (data) => {
  return {
    name: data.name,
    coord: data.coord,
    weather: data.weather[0],
    C: {
      current: toCelsius(data.main.temp),
      low: toCelsius(data.main.temp_min),
      high: toCelsius(data.main.temp_max),
    },
    F: {
      current: toFahrenheit(data.main.temp),
      low: toFahrenheit(data.main.temp_min),
      high: toFahrenheit(data.main.temp_max),
    },
  };
};

export const getFiveDaysData = (forecastData) => {
  const result = [];
  let minTempMin = Infinity;
  let maxTempMax = -Infinity;
  let currentTemp = 0;

  // get max and min and calculate current temp of the day
  for (let i = 0; i < forecastData.length; i += 8) {
    for (let j = i; j < i + 8; j++) {
      const item = forecastData[j];
      minTempMin = Math.min(minTempMin, item.main.temp_min);
      maxTempMax = Math.max(maxTempMax, item.main.temp_max);
      currentTemp += item.main.temp;
    }
    currentTemp = currentTemp / 8;
    result.push({
      current: Math.round(currentTemp),
      low: Math.round(minTempMin),
      high: Math.round(maxTempMax),
      date: formatDate(forecastData[i].dt_txt),
      dt: forecastData[i].dt,
      weather: forecastData[i].weather[0],
    });
    minTempMin = Infinity;
    maxTempMax = -Infinity;
    currentTemp = 0;
  }
  return result;
};
