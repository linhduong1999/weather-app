const createTempUnitSlice = (set, get) => ({
  tempUnit: {},
  toggleUnit: (newUnit) => {
    const user = get().user;
    if (!user) return;

    set(state => ({ tempUnit: { ...state.tempUnit, [user]: newUnit }}));
  },
});

export default createTempUnitSlice;
