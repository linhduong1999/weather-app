import { create } from "zustand";
import { validateEmail } from "../utils/validateEmail";

const useUserStore = create((set, get) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  cities: JSON.parse(localStorage.getItem("cities")) || [],
  getCities: (user) => {
    return JSON.parse(localStorage.getItem(`cities:${user}`)) || [];
  },
  addCity: (newCity) => {
    const { user } = get();
    const updatedCities = [...get().cities, newCity];
    set({ cities: updatedCities });
    localStorage.setItem(`cities:${user}`, JSON.stringify(updatedCities));
  },
  removeCity: (cityName) => {
    const { user } = get();
    const updatedCities = get().cities.filter((city) => city !== cityName);
    set({ cities: updatedCities });
    localStorage.setItem(`cities:${user}`, JSON.stringify(updatedCities));
  },
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
        localStorage.setItem("user", JSON.stringify(email));
        localStorage.setItem(`cities:${email}`, JSON.stringify([]));
      }
      return true;
    } else {
      set({ user: null, cities: [] });
      localStorage.removeItem("user");
      localStorage.removeItem("cities");
      return false;
    }
  },
  logout: () => {
    const { user, cities } = get();
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem(`cities:${user}`, JSON.stringify(cities));
    set({ user: null, cities: [] });
    localStorage.removeItem("user");
    localStorage.removeItem(`cities:${user}`);
  },
}));

export default useUserStore;
