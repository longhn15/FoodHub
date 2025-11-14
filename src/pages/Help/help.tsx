import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Stack, Paper, Chip } from '@mui/material';
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { useNavigate } from "react-router-dom";

function Help() {
    // const navigate = useNavigate();
    const [reason, setReason] = useState('');
    const [selected, setSelected] = useState<string | null>(null);

    const quickReasons = ['Thêm bát', 'Thêm đũa', 'Thêm muỗng', 'Thêm nước mắm'];

    const handleQuickSelect = (item: string) => {
        setSelected(item);
        setReason((preItem) => (preItem !== '' ? preItem + ',' + item : item));
    };

    const handleSubmit = () => {
        if (!reason.trim()) {
            alert('Vui lòng nhập lý do hoặc chọn nhanh trước khi gửi!');
            return;
        }
        alert(`Yêu cầu đã được gửi: ${reason}`);
        setReason('');
        setSelected(null);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                bgcolor: '#ddd1d1ff',
                p: 2,
                marginTop: '-80px',
            }}
        >
            <Paper
                elevation={4}
                sx={{
                    width: '100%',
                    maxWidth: 400,
                    borderRadius: 3,
                    p: 3,
                    position: 'relative',
                    bgcolor: '#fff',
                }}
            >
                {/* Nút trở về */}
                {/* <Button
          onClick={() => navigate(-1)}
          startIcon={<ArrowBackIcon />}
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            textTransform: "none",
          }}
        >
          Trở về
        </Button> */}

                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                    Gọi nhân viên
                </Typography>

                <Typography variant="body2" sx={{ mb: 1 }} color="#bd2d2dff" fontSize="16px" fontWeight="bold">
                    Lý do gọi nhân viên
                </Typography>

                <TextField
                    placeholder="Ví dụ: Thêm bát, Thêm đũa, Dọn bàn..."
                    fullWidth
                    multiline
                    minRows={2}
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    sx={{
                        mb: 2,
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                        },
                    }}
                />

                <Typography variant="body2" sx={{ mb: 1 }} color="#bd2d2dff" fontSize="16px" fontWeight="bold">
                    Chọn nhanh lý do
                </Typography>

                <Stack direction="row" flexWrap="wrap" gap={1} justifyContent="flex-start" sx={{ mb: 3 }}>
                    {quickReasons.map((item) => (
                        <Chip
                            key={item}
                            label={item}
                            clickable
                            onClick={() => handleQuickSelect(item)}
                            sx={{
                                fontWeight: 500,
                                fontSize: 14,
                                px: 0.5,
                                bgcolor: selected === item ? '#ffeb3b' : 'white',
                                border: selected === item ? '2px solid #fdd835' : '1px solid #ccc',
                                '&:hover': {
                                    bgcolor: '#fff9c4',
                                },
                            }}
                        />
                    ))}
                </Stack>

                <Button
                    fullWidth
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                        bgcolor: '#9c27b0',
                        color: 'white',
                        py: 1.5,
                        borderRadius: 3,
                        fontWeight: 600,
                        '&:hover': {
                            bgcolor: '#7b1fa2',
                        },
                    }}
                >
                    Gửi yêu cầu
                </Button>
            </Paper>
        </Box>
    );
}

export default Help;
