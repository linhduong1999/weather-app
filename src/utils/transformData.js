import { formatDate } from "./formatDate";

// Converts Kelvin to Celsius
const toCelsius = (kelvin) => (kelvin - 273.15).toFixed(2);

// Converts Kelvin to Fahrenheit
const toFahrenheit = (kelvin) => (((kelvin - 273.15) * 9) / 5 + 32).toFixed(2);

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

  // get max and min of the day
  for (let i = 0; i < forecastData.length; i += 8) {
    for (let j = i; j < i + 8; j++) {
      const item = forecastData[j];
      minTempMin = Math.min(minTempMin, item.main.temp_min);
      maxTempMax = Math.max(maxTempMax, item.main.temp_max);
    }

    result.push({
      low: minTempMin,
      high: maxTempMax,
      date: formatDate(forecastData[i].dt_txt),
      weather: forecastData[i].weather,
    });
    minTempMin = Infinity;
    maxTempMax = -Infinity;
  }
  console.log(
    "🚀 ~ file: transformData.js:50 ~ getFiveDaysData ~ result:",
    result
  );
  return result;
};
