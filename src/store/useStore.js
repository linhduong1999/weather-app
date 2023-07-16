import { create } from "zustand";
import createCitySlice from "./citySlice";
import createUserSlice from "./userSlice";
import createTempUnitSlice from "./tempUnitSlide";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get, api) => ({
      ...createUserSlice(set, get),
      ...createCitySlice(set, get),
      ...createTempUnitSlice(set, get),
    }),
    { name: "weather_app" } // use localStorage
  )
);

export default useStore;
