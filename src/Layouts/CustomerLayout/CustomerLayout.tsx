import React, { ReactElement, useState } from "react";
import { Box, Toolbar } from "@mui/material";
import Header from "~/layouts/Components/Header";
import FooterBar from "~/layouts/Components/FooterBar";

type CustomerLayoutProps = {
  children: ReactElement;
};

export default function CustomerLayout({ children }: CustomerLayoutProps) {
  const [cart, setCart] = useState<any>([]);

  const addToCart = (item: any) => {
    setCart((prevCart: any[]) => {
      const existingItem = prevCart.find((c) => c.name === item.name);

      if (existingItem) {
        alert("Món này đã có trong giỏ hàng!");
        return prevCart;
      }
      else {
        return [...prevCart, item];
      }
    });
  };


  return (
    <Box sx={{ display: "flex" }}>
      {/* Header */}
      <Header/>

      {/* Nội dung chính */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Đệm chỗ cho AppBar (Toolbar để không bị che) */}
        <Box sx={{mt: "40px"}} />
        {React.cloneElement(children as any, {addToCart, cart, setCart})}
      </Box>

       <FooterBar
        cartCount={cart.length}
      />
    </Box>
  );
}



