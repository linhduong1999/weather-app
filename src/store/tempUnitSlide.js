const createTempUnitSlice = (set, get) => ({
  tempUnit:
    JSON.parse(
      localStorage.getItem(`tempUnit:${localStorage.getItem("user")}`)
    ) || "C",

  toggleUnit: (newUnit) => {
    set({ tempUnit: newUnit });
    localStorage.setItem(`tempUnit:${get().user}`, JSON.stringify(newUnit));
  },
});

export default createTempUnitSlice;
