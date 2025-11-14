import React, { useState, useEffect } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { Add, Remove, Delete, CheckCircle, Payment } from "@mui/icons-material";

type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

type CartDrawerProps = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

export default function CartDrawer({ cart, setCart }: CartDrawerProps) {
  const [items, setItems] = useState<CartItem[]>(cart);

  // ✅ Đồng bộ lại khi prop cart thay đổi (nếu từ ngoài truyền vào)
  useEffect(() => {
    setItems(cart);
  }, [cart]);

  // ✅ Xử lý tăng giảm số lượng
  const handleIncrease = (index: number) => {
    const newCart = [...items];
    newCart[index].quantity += 1;
    setItems(newCart); 
    setCart(newCart);
  };

  const handleDecrease = (index: number) => {
    const newCart = [...items];
    if (newCart[index].quantity > 1) newCart[index].quantity -= 1;
    setItems(newCart);
    setCart(newCart);
  };

  // ✅ Xử lý xóa món
  const handleRemove = (index: number) => {
    const newCart = items.filter((_, i) => i !== index);
    setItems(newCart);
    setCart(newCart);
  };

  // ✅ Tính tổng tiền
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = 0;
  const total = subtotal - discount;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "78vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "white",
      }}
    >
      {/* Header */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          textAlign: "center",
          borderBottom: "1px solid #eee",
          paddingBottom: 2,
        }}
      >
        Giỏ hàng
      </Typography>

      {/* Danh sách món — có thể cuộn */}
      <Box sx={{ flex: 1, overflowY: "auto", height: "300px" }}>
        <List>
          {items.length === 0 ? (
            <ListItem>
              <ListItemText primary="Giỏ hàng trống" />
            </ListItem>
          ) : (
            items.map((c, idx) => (
              <Box key={idx}>
                <ListItem
                  alignItems="flex-start"
                  sx={{
                    borderBottom: "1px solid #eee",
                    pl: 0,
                    pr: 6,
                  }}

                  // Icon xóa món
                  secondaryAction={
                    <IconButton edge="end" onClick={() => handleRemove(idx)}>
                      <Delete color="error" />
                    </IconButton>
                  }
                >
                  {/* Tên món và giá tiền */}
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" fontWeight={500}>
                        {c.name}
                      </Typography>
                    }
                    secondary={
                      <Typography color="text.secondary" variant="body2">
                        {c.price.toLocaleString()} đ
                      </Typography>
                    }
                  />
                

                {/* Cộng trừ số lượng */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    ml: 6,
                    mt: 2,
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={() => handleDecrease(idx)}
                    sx={{
                      bgcolor: "#f5f5f5",
                      "&:hover": { bgcolor: "#e0e0e0" },
                    }}
                  >
                    <Remove fontSize="small" />
                  </IconButton>

                  <Typography>{c.quantity}</Typography>

                  <IconButton
                    size="small"
                    onClick={() => handleIncrease(idx)}
                    sx={{
                      bgcolor: "#f5f5f5",
                      "&:hover": { bgcolor: "#e0e0e0" },
                    }}
                  >
                    <Add fontSize="small" />
                  </IconButton>
                </Box>

                </ListItem>
              </Box>
            ))
          )}
        </List>
      </Box>

      {/* Footer cố định */}
      <Box
        sx={{
          width: "100%",
          // borderTop: "1px solid #eee",
          bgcolor: "white",
        }}
      >
        {/* Tính tiền */}
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
            <Typography variant="body2">
              Tạm tính ({items.length} món)
            </Typography>
            <Typography variant="body2">
              {subtotal.toLocaleString()} đ
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
            <Typography variant="body2">Giảm giá</Typography>
            <Typography variant="body2">{discount.toLocaleString()} đ</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 1,
              fontWeight: "bold",
            }}
          >
            <Typography variant="subtitle1" fontWeight={600}>
              Tổng cộng
            </Typography>
            <Typography variant="subtitle1" fontWeight={600}>
              {total.toLocaleString()} đ
            </Typography>
          </Box>
        </Box>

        {/* Nút hành động */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<CheckCircle />}
            sx={{
              bgcolor: "#ffeb3b",
              color: "black",
              fontWeight: 600,
              "&:hover": { bgcolor: "#fdd835" },
            }}
          >
            Xác nhận
          </Button>

          <Button
            fullWidth
            variant="contained"
            startIcon={<Payment />}
            sx={{
              bgcolor: "#ffeb3b",
              color: "black",
              fontWeight: 600,
              "&:hover": { bgcolor: "#fdd835" },
            }}
          >
            Thanh toán
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
