import React from "react";
import { Box, Button, Badge } from "@mui/material";
import { ShoppingCart, HelpOutline, RestaurantMenu, Payment } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const buttons = [
  { id: "/help", label: "Gọi hỗ trợ", icon: <HelpOutline /> },
  { id: "/", label: "Thực đơn", icon: <RestaurantMenu /> },
  { id: "/cartdrawer", label: "Giỏ hàng", icon: <ShoppingCart />, isCart: true },
  { id: "/pay", label: "Thanh toán", icon: <Payment /> },
];

export default function FooterBar({
  cartCount = 0,
}: {
  cartCount?: number;
}) {
  const navigate = useNavigate();
  const location = useLocation(); // lấy URL hiện tại

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        bgcolor: "white",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderTop: "1px solid #ddd",
        boxShadow: "0 -2px 6px rgba(0,0,0,0.1)",
        zIndex: 1200,
      }}
    >
      {buttons.map((btn) => {
        const isActive =
          location.pathname === btn.id ||
          (btn.id === "/" && location.pathname === "/"); // check đường dẫn hiện tại

        return (
          <Button
            key={btn.id}
            onClick={() => navigate(btn.id)}
            startIcon={
              btn.isCart ? (
                <Badge
                  badgeContent={cartCount}
                  color="warning"
                  sx={{
                    "& .MuiBadge-badge": {
                      fontSize: 15,
                      minWidth: 18,
                      height: 18,
                      top: 6,
                      right: -6,
                    },
                  }}
                >
                  {btn.icon}
                </Badge>
              ) : (
                btn.icon
              )
            }
            sx={{
              flex: 1,
              height: "100%",
              borderRadius: 0,
              fontSize: "12px",
              fontWeight: isActive ? 600 : 400,
              color: isActive ? "black" : "text.secondary",
              bgcolor: isActive ? "#ffeb3b" : "transparent",
              "&:hover": {
                bgcolor: isActive ? "#eec614ff" : "#f5f5f5",
              },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textTransform: "none",
            }}
          >
            {btn.label}
          </Button>
        );
      })}
    </Box>
  );
}
