import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        {/* Logo / Tên app */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          🍽️ FoodHub
        </Typography>
        <Box display="flex">
          <Box flex="1" display="flex">
            <Typography fontSize="16px" marginRight="10px">Khách hàng:</Typography>
            <Typography fontSize="16px" fontWeight="bold" color="white">Nguyễn Văn A</Typography>
          </Box>
          {/* <Typography variant="h5" fontWeight="bold" color="Blue">Bàn 1</Typography> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}


