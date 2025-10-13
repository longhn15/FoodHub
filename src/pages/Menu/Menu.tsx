import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { menuData } from "~/mockData.js"

type MenuProps = {
  addToCart?: (item: any) => void; 
};

export default function Menu({ addToCart}: MenuProps ) {


  return (
    <Grid container spacing={2} sx={{ p: 2}}>
      {menuData.map((item) => (
        <Grid size={{ xs: 6, sm: 4, md: 3 }} key={item.id}>
          <Card>
            <CardMedia
              component="img"
              height="120"
              image={item.img}
              alt={item.name}
            />
            <Box display="flex" >
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.price.toLocaleString()} đ
                </Typography>
              </CardContent >
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => addToCart && addToCart(item)}
                >
                  + Thêm
                </Button>
              </CardActions>
            </Box>
            
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
