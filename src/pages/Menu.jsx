import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { menuData } from "../mockData";

export default function Menu({ addToCart }) {
  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      {menuData.map((item) => (
        <Grid size={{ xs: 12, sm: 3, md: 4 }} key={item.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={item.img}
              alt={item.name}
            />
            <CardContent>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.price.toLocaleString()} đ
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                size="small"
                onClick={() => addToCart(item)}
              >
                + Thêm
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
