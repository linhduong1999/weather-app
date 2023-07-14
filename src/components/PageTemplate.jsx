import { styled } from "@mui/material/styles";

export const PageTemplate = styled("div")(
  ({ theme }) => `
  display:flex;
  flex-grow: 1;
  flex-direction: column;
  gap: ${theme.spacing(4)};
`
);
