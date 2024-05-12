import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4943DA",
    },
    secondary: {
      main: "#54EFC3",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
