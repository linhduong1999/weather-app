import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const PageContentTemplate = React.memo(({ children, title }) => {
  return (
    <StyledContainer>
      <Typography variant="h4">{title}</Typography>
      {children}
    </StyledContainer>
  );
});

export default PageContentTemplate;

const StyledContainer = styled(Stack)`
  padding: ${({ theme }) => theme.spacing(4)};
  border: 1px solid ${({ theme }) => theme.palette.secondary.main};
  border-radius: ${({ theme }) => theme.shape.borderRadius.m};
  background-color: ${({ theme }) => theme.palette.common.white};
  gap: ${({ theme }) => theme.spacing(4)};
  flex-direction: column;
  
`;
