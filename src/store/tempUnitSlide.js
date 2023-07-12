const createTempUnitSlice = (set, get) => {
  const user = localStorage.getItem("user");

  return {
    tempUnit: user ? localStorage.getItem(`tempUnit:${user}`) : "C",

    toggleUnit: (newUnit) => {
      set({ tempUnit: newUnit });
      localStorage.setItem(`tempUnit:${user}`, newUnit);
    },
  };
};

export default createTempUnitSlice;
