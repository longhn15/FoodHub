import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        {/* Logo / Tên app */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          🍽️ FoodHub
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
