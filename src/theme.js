import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF5722", // cam đỏ (màu chủ đạo FoodHub)
    },
    secondary: {
      main: "#4CAF50", // xanh lá (tươi, organic)
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default theme;
