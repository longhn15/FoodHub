import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CartDrawer from "../../../pages/CartDrawer";

export default function Header({ cartCount, onMenuClick, onCartClick }) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        {/* Nút mở Sidebar */}
        <IconButton edge="start" color="inherit" onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>

        {/* Logo / Tên app */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          🍽️ FoodHub
        </Typography>

        {/* Nút giỏ hàng */}
        <CartDrawer open={}, onClose, cart />
      </Toolbar>
    </AppBar>
  );
}
