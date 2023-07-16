const createCitySlice = (set, get) => ({
  cities: {},
  addCity: (newCity) => {
    const user = get().user;
    if (!user) return;

    const currentCities = get().cities[user] || [];
    if (
      currentCities.some(
        (city) =>
          city.coord.lat === newCity.coord.lat &&
          city.coord.lon === newCity.coord.lon
      )
    )
      return;

    const updatedCities = [newCity, ...currentCities];
    set((state) => ({ cities: { ...state.cities, [user]: updatedCities } }));
  },
  removeCity: (cityName) => {
    const user = get().user;
    if (!user) return;

    const currentCities = get().cities[user] || [];
    const updatedCities = currentCities.filter(
      (city) => city.name !== cityName
    );

    set((state) => ({ cities: { ...state.cities, [user]: updatedCities } }));
  },
});

export default createCitySlice;
