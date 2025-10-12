import React, { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import Header from "../Components/Header";
import FooterBar from "../Components/FooterBar";

export default function CustomerLayout({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };


  return (
    <Box sx={{ display: "flex" }}>
      {/* Header */}
      <Header/>

      {/* Nội dung chính */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Đệm chỗ cho AppBar (Toolbar để không bị che) */}
        <Toolbar />
        {React.cloneElement(children, {addToCart})}
      </Box>

       <FooterBar
        cartCount={cart.length}
        onSupport={() => alert("Gọi hỗ trợ")}
        onMenu={() => alert("Xem thực đơn")}
        onCart={() => alert("Xem giỏ hàng")}
        onPay={() => alert("Gọi thanh toán")}
      />
    </Box>
  );
}
