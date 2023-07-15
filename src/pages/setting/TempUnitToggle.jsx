import React, { useMemo } from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Box,
} from "@mui/material";
import useStore from "../../store/useStore";
import { styled } from "@mui/material/styles";
import { theme } from "../../theme";

const TemperatureToggle = () => {
  const { tempUnit, toggleUnit } = useStore(({ tempUnit, toggleUnit }) => ({
    tempUnit,
    toggleUnit,
  }));

  const handleToggle = (event, newUnit) => {
    if (newUnit !== null) {
      toggleUnit(newUnit);
    }
  };

  const memoizedToggleButtonGroup = useMemo(
    () => (
      <StyledToggleButtonGroup
        value={tempUnit}
        exclusive
        onChange={handleToggle}
        aria-label="temperature"
      >
        <StyledToggleButton value="C" aria-label="Celsius">
          Celsius
        </StyledToggleButton>
        <StyledToggleButton value="F" aria-label="Fahrenheit">
          Fahrenheit
        </StyledToggleButton>
      </StyledToggleButtonGroup>
    ),
    [tempUnit, handleToggle]
  );

  return (
    <UnitContainer>
      <Typography variant="body1">Temperature Unit</Typography>
      {memoizedToggleButtonGroup}
    </UnitContainer>
  );
};

const UnitContainer = styled(Box)(
  () => `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `
);

const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  border-radius: ${theme.shape.borderRadius.s};
  border: 1px solid ${theme.palette.secondary.main};
  overflow: hidden;

  .MuiToggleButton-root {
    border: none;
    &:hover:not(.Mui-selected) {
      background-color: ${theme.palette.primary.light};
      border-radius: ${theme.shape.borderRadius.s};
    }
    &.Mui-selected {
      color: ${theme.palette.common.white};
      background-color: ${theme.palette.primary.main};
      border-radius: ${theme.shape.borderRadius.s};
    }
  }
`;

const StyledToggleButton = styled(ToggleButton)``;

export default React.memo(TemperatureToggle);
