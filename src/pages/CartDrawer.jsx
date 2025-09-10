import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
} from "@mui/material";

export default function CartDrawer({ open, onClose, cart }) {
  const totalPrice = cart.reduce((sum, i) => sum + i.price, 0);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <List sx={{ width: 320 }}>
        <Typography variant="h6" sx={{ p: 2 }}>
          🛒 Giỏ hàng
        </Typography>
        {cart.map((c, idx) => (
          <ListItem key={idx}>
            <ListItemText
              primary={c.name}
              secondary={`${c.price.toLocaleString()} đ`}
            />
          </ListItem>
        ))}
        <Typography variant="body1" sx={{ p: 2 }}>
          Tổng: {totalPrice.toLocaleString()} đ
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ m: 2 }}
          fullWidth
        >
          Đặt món
        </Button>
      </List>
    </Drawer>
  );
}
