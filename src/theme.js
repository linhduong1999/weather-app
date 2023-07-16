import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    allVariants: {
      color: "#070B47",
    },
    customFontSize: {
      s: "16px",
      m: "18px",
    },
  },
  palette: {
    background: {
      default: "#f7f6f9",
    },
    primary: {
      main: "#070B47",
      light: "#070B4730",
    },
    secondary: {
      main: "#d9d9d9",
      light: "#9f9f9f",
      dark: "#536878",
    },
  },
  shape: {
    borderRadius: {
      s: "10px",
      m: "15px",
    },
  },
});
