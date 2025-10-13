import React, { ReactElement, useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import FooterBar from '~/layouts/Components/FooterBar';

type FooterOnlyProps = {
  children: ReactElement;
};

export default function FooterOnly({ children }: FooterOnlyProps) {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (item: any) => {
    setCart([...cart, item]);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Nội dung chính */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Đệm chỗ cho AppBar (Toolbar để không bị che) */}
        <Toolbar />
        {React.cloneElement(children as any, { addToCart })}
      </Box>

      <FooterBar
        cartCount={cart.length}
      />
    </Box>
  );
}
