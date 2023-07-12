import { validateEmail } from "../utils/validateEmail";

const createUserSlice = (set, get) => ({
  user: localStorage.getItem("user") || null,

  login: (email, password) => {
    if (validateEmail(email) && password === "123") {
      const persistedCities = JSON.parse(
        localStorage.getItem(`cities:${email}`)
      );

      if (persistedCities) {
        set({ user: email, cities: persistedCities });
      } else {
        set({ user: email });
      }
      localStorage.setItem("user", email);

      return true;
    } else {
      set({ user: null });
      localStorage.removeItem("user");
      return false;
    }
  },

  logout: () => {
    set({ user: null, cities: [], tempUnit: "C" });
    localStorage.removeItem("user");
  },
});

export default createUserSlice;
