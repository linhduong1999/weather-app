// Converts Kelvin to Celsius
const toCelsius = (kelvin) => (kelvin - 273.15).toFixed(2);

// Converts Kelvin to Fahrenheit
const toFahrenheit = (kelvin) => (((kelvin - 273.15) * 9) / 5 + 32).toFixed(2);

export const extractWeatherData = (data, name) => {
  return {
    name: name,
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
