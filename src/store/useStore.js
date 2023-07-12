import { create } from "zustand";
import createCitySlice from "./citySlice";
import createUserSlice from "./userSlice";
import createTempUnitSlice from "./tempUnitSlide";

const useStore = create()((...state) => ({
  ...createUserSlice(...state),
  ...createCitySlice(...state),
  ...createTempUnitSlice(...state),
}));

export default useStore;
