import React from "react";
import TempUnitToggle from "./TempUnitToggle";
import PageTemplate from "../../components/PageTemplate";
import { styled } from "@mui/material/styles";

const Setting = () => {
  return (
    <StyledContainer>
      <PageTemplate title={"Settings"}>
        <TempUnitToggle />
      </PageTemplate>
    </StyledContainer>
  );
};

export default Setting;

const StyledContainer = styled("div")`
  flex-grow: 1;
  flex-direction: row;
  max-width: 1300px;
`;
