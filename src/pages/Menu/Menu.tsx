import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { menuData } from "~/mockData.js";
import FoodDetail from "./FoodDetail"; // Import modal

type MenuProps = {
  cart: any,
  addToCart?: (item: any) => void;
};

export default function Menu({ addToCart, cart }: MenuProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenDetail = (item: any) => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedItem(null);
  };

  const handleAddToCart = (orderItem: any) => {
    if (addToCart) {
      addToCart(orderItem);
    }
  };

  // Lọc món ăn theo search term
  const filteredMenu = menuData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Header với Bàn 1 và Search */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
        gap={2}
        flexWrap="wrap"
      >
        <Typography variant="h5" fontWeight="bold" color="primary">
          Bàn 1
        </Typography>

        <TextField
          placeholder="Tìm món ăn..."
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            minWidth: { xs: "100%", sm: "250px" },
            maxWidth: { sm: "350px" },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Hiển thị kết quả tìm kiếm */}
      {searchTerm && (
        <Typography variant="body2" color="text.secondary" mb={1}>
          Tìm thấy {filteredMenu.length} món
        </Typography>
      )}

      {/* Grid món ăn */}
      <Grid container spacing={2} marginBottom="50px">
        {filteredMenu.length > 0 ? (
          filteredMenu.map((item) => (
            <Grid size={{ xs: 6, sm: 4, md: 3 }} key={item.id}>
              <Card>
                <CardMedia
                  component="img"
                  image={item.img}
                  alt={item.name}
                  sx={{
                    width: "100%",
                    aspectRatio: "3 / 2",
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                />
                <Box display="flex" flexDirection="column">
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "3px 0 0 0",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "15px",
                          sm: "13px",
                          md: "14px",
                          lg: "15px",
                        },
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: 600,
                      }}
                    >
                      {item.price.toLocaleString()} đ
                    </Typography>
                  </CardContent>

                  
                  <CardActions sx={{ padding: 0 }}>
                     {/* Nút mở detail */}
                    <Button
                      variant="contained"
                      onClick={() => handleOpenDetail(item)}
                      sx={{
                        fontSize: { xs: "12px", sm: "14px", md: "16px" },
                        flex: 1,
                        fontWeight: 600,
                        color: "#faf8f8ff",
                      }}
                    >
                      Chi tiết
                    </Button>

                    <Button
                      variant="contained"
                      onClick={() => handleAddToCart(item)}
                      sx={{
                        fontSize: { xs: "12px", sm: "14px", md: "16px" },
                        flex: 1,
                        fontWeight: 600,
                        color: "#faf8f8ff",
                      }}
                    >
                      + thêm
                    </Button>
                  </CardActions>
                </Box>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid size={12}>
            <Typography
              variant="body1"
              color="text.secondary"
              textAlign="center"
              mt={4}
            >
              Không tìm thấy món ăn phù hợp
            </Typography>
          </Grid>
        )}
      </Grid>

      <FoodDetail
        open={openModal}
        onClose={handleCloseModal}
        item={selectedItem}
        addToCart={handleAddToCart}
        cart={cart}
      />

    </>
  );
}