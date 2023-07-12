const createTempUnitSlice = (set, get) => {
  const user = localStorage.getItem("user");

  return {
    tempUnit: user ? localStorage.getItem(`tempUnit:${user}`) || "C" : "C",

    toggleUnit: (newUnit) => {
      if (!get().user) return;

      set({ tempUnit: newUnit });
      localStorage.setItem(`tempUnit:${get().user}`, newUnit);
    },
  };
};

export default createTempUnitSlice;
