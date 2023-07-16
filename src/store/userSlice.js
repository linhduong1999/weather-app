import { validateEmail } from "../utils/validateEmail";

const createUserSlice = (set, get) => ({
  user: null,
  login: (email, password) => {
    if (validateEmail(email) && password === "test1234") {
      set({ user: email });

      // Initialize cities and temperature units for a new user
      const currentCities = get().cities;
      const currentTempUnits = get().tempUnit;
      if (!currentCities[email]) {
        set(state => ({ cities: { ...state.cities, [email]: [] }}));
      }
      if (!currentTempUnits[email]) {
        set(state => ({ tempUnit: { ...state.tempUnit, [email]: "C" }}));
      }

      return true;
    } else {
      set({ user: null });
      return false;
    }
  },
  logout: () => {
    set({ user: null });
  },
});


export default createUserSlice;
