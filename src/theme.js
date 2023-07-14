import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    allVariants: {
      color: "#070B47",
    },
  },
  palette: {
    primary: {
      main: "#070B47",
      light: "#070B4730",
    },
    secondary: {
      main: "#d9d9d9",
    },
  },
  shape: {
    borderRadius: {
      s: "10px",
      m: "15px",
    },
  },
});
