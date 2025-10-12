import React from "react";
import { Box, Button, Badge } from "@mui/material";
import { ShoppingCart, HelpOutline, RestaurantMenu, Payment } from "@mui/icons-material";

export default function FooterBar({ cartCount = 0, onSupport, onMenu, onCart, onPay}) {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: 40,
        bgcolor: "white",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderTop: "1px solid #ddd",
        boxShadow: "0 -2px 6px rgba(0,0,0,0.1)",
        zIndex: 1200,
      }}
    >
      <Button
        onClick={onSupport}
        startIcon={<HelpOutline/>}
        sx={{ flex: 1, height: "100%", borderRadius: 0 }}
      >
        Yêu cầu hỗ trợ
      </Button>

      <Button
        onClick={onMenu}
        startIcon={<RestaurantMenu />}
        sx={{
          flex: 1,
          height: "100%",
          borderRadius: 0,
          bgcolor: "#ffeb3b",
          "&:hover": { bgcolor: "#fdd835" },
        }}
      >
        Thực đơn & gọi món
      </Button>

      <Button
        onClick={onCart}
        sx={{ flex: 1, height: "100%", borderRadius: 0 }}
      >
        <Badge
          badgeContent={cartCount}
          color="warning"
          sx={{ "& .MuiBadge-badge": { fontSize: 14, minWidth: 22, height: 22 } }}
        >
          <ShoppingCart />
        </Badge>
        &nbsp;Giỏ hàng
      </Button>

      <Button
        onClick={onPay}
        startIcon={<Payment />}
        sx={{ flex: 1, height: "100%", borderRadius: 0 }}
      >
        Gọi thanh toán
      </Button>
    </Box>
  );
}
