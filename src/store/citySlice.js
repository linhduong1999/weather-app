const createCitySlice = (set, get) => {
  const user = localStorage.getItem("user");

  return {
    cities: user
      ? JSON.parse(localStorage.getItem(`cities:${user}`)) || []
      : [],

    addCity: (newCity) => {
      if (!get().user) return;

      const currentCities = get().cities;
      if (
        currentCities.some(
          (city) =>
            city.coord.lat === newCity.coord.lat &&
            city.coord.lon === newCity.coord.lon
        )
      )
        return;

      const updatedCities = [...currentCities, newCity];
      set({ cities: updatedCities });
      localStorage.setItem(
        `cities:${get().user}`,
        JSON.stringify(updatedCities)
      );
    },

    removeCity: (cityName) => {
      if (!get().user) return;
      const updatedCities = get().cities.filter((city) => city !== cityName);
      set({ cities: updatedCities });
      localStorage.setItem(
        `cities:${get().user}`,
        JSON.stringify(updatedCities)
      );
    },
  };
};

export default createCitySlice;
