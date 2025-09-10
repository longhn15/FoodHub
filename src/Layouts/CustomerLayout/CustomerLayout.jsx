import React, { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

export default function CustomerLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cart, setCart] = useState([]);

  return (
    <Box sx={{ display: "flex" }}>
      {/* Header */}
      <Header
        cartCount={cart.length}
        onMenuClick={() => setSidebarOpen(true)}
        onCartClick={() => alert("Mở giỏ hàng")}
      />

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Nội dung chính */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Đệm chỗ cho AppBar (Toolbar để không bị che) */}
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
