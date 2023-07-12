import { create } from "zustand";
import { validateEmail } from "../utils/validateEmail";

const useUserStore = create((set, get) => ({
  user: null,
  cities: [],
  login: (email, password) => {
    if (validateEmail(email) && password === "123") {
      const persistedUser = localStorage.getItem("user");
      const persistedCities = localStorage.getItem(`cities:${email}`);

      if (persistedUser && persistedCities) {
        set({
          user: JSON.parse(persistedUser),
          cities: JSON.parse(persistedCities),
        });
      } else {
        set({ user: email, cities: [] });
      }
      return true;
    } else {
      set({ user: null, cities: [] });
      return false;
    }
  },
  addCity: (newCity) =>
    set((state) => ({ cities: [...state.cities, newCity] })),
  removeCity: (cityName) =>
    set((state) => ({
      cities: state.cities.filter((city) => city !== cityName),
    })),
  logout: () => {
    const { user, cities } = useUserStore.getState();
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem(`cities:${user}`, JSON.stringify(cities));
    set({ user: null, cities: [] });
  },
}));

export default useUserStore;

