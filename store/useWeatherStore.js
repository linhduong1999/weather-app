import { create } from "zustand";

const useWeatherStore = create((set) => ({
  cities: [],
  addCity: (newCity) =>
    set((state) => ({ cities: [newCity, ...state.cities] })),
  removeCity: (cityToRemove) =>
    set((state) => ({
      cities: state.cities.filter((city) => city !== cityToRemove),
    })),
}));

export default useWeatherStore;