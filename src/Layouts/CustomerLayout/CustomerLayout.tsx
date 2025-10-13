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
        {React.cloneElement(children as any, {addToCart})}
      </Box>

       <FooterBar
        cartCount={cart.length}
      />
    </Box>
  );
}
