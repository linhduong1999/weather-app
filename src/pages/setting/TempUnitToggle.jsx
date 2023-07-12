import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import useStore from "../../store/useStore";

const TemperatureToggle = () => {
  const { tempUnit, toggleUnit } = useStore((state) => ({
    tempUnit: state.tempUnit,
    toggleUnit: state.toggleUnit,
  }));

  const handleToggle = (event, newUnit) => {
    if (newUnit !== null) {
        toggleUnit(newUnit);
    }
  };

  return (
    <ToggleButtonGroup
      value={tempUnit}
      exclusive
      onChange={handleToggle}
      aria-label="temperature"
    >
      <ToggleButton value="C" aria-label="Celsius">
        Celsius
      </ToggleButton>
      <ToggleButton value="F" aria-label="Fahrenheit">
        Fahrenheit
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default TemperatureToggle;
