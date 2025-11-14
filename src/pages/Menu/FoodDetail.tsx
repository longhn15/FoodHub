import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogActions,
    Typography,
    Button,
    Box,
    IconButton,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
    TextField,
    Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

type FoodDetailProps = {
    open: boolean;
    onClose: () => void;
    item: any;
    addToCart: (orderItem: any) => void;
    cart: any;
};

export default function FoodDetail({ open, onClose, item, addToCart, cart }: FoodDetailProps) {
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(item?.options?.size?.[0]?.label || '');
    const [selectedSpicy, setSelectedSpicy] = useState('Không cay');
    const [selectedIce, setSelectedIce] = useState('100%');
    const [selectedSugar, setSelectedSugar] = useState('100%');
    const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
    const [note, setNote] = useState('');

    if (!item) return null;

    // Tính giá size
    const sizePrice = item.options?.size?.find((s: any) => s.label === selectedSize)?.price || 0;

    // Tính giá toppings
    const toppingsPrice = selectedToppings.reduce((sum, toppingId) => {
        const topping = item.options?.toppings?.find((t: any) => t.id === toppingId);
        return sum + (topping?.price || 0);
    }, 0);

    // Tổng giá
    const totalPrice = (item.price + sizePrice + toppingsPrice) * quantity;

    const handleToppingChange = (toppingId: string) => {
        setSelectedToppings((prev) =>
            prev.includes(toppingId) ? prev.filter((id) => id !== toppingId) : [...prev, toppingId],
        );
    };

    const handleAddToCart = () => {
        const orderItem = {
            ...item,
            quantity,
            selectedSize,
            selectedSpicy: item.options?.spicyLevel ? selectedSpicy : undefined,
            selectedIce: item.options?.ice ? selectedIce : undefined,
            selectedSugar: item.options?.sugar ? selectedSugar : undefined,
            selectedToppings: selectedToppings.map((id) => item.options?.toppings?.find((t: any) => t.id === id)),
            note,
            totalPrice,
        };
        addToCart(orderItem);
        onClose();
    };

    return (
        <Dialog
            open={open}
            maxWidth="sm"
            fullWidth
            PaperProps={{
                sx: { borderRadius: 3 },
            }}
        >
            {/* Header với nút đóng */}
            <Box position="relative">
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        bgcolor: 'white',
                        zIndex: 1,
                        boxShadow: 1,
                    }}
                >
                    <CloseIcon />
                </IconButton>

                {/* Hình ảnh món */}
                <Box
                    component="img"
                    src={item.img}
                    alt={item.name}
                    sx={{
                        width: '100%',
                        height: 220,
                        objectFit: 'cover',
                    }}
                />
            </Box>

            <DialogContent sx={{ pt: 1 }}>
                {/* Tên và giá */}
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {item.name}
                </Typography>
                <Typography variant="h6" color="error" fontWeight="bold" mb={2}>
                    {item.price.toLocaleString()} đ
                </Typography>

                {/* Mô tả */}
                {item.description && (
                    <>
                        <Typography variant="body2" color="text.secondary" mb={2}>
                            {item.description}
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                    </>
                )}

                {/* Size */}
                {item.options?.size && (
                    <Box mb={3}>
                        <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                            Chọn size *
                        </Typography>

                        <RadioGroup value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                            {item.options.size.map((size: any) => (
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <FormControlLabel
                                        key={size.label}
                                        value={size.label}
                                        control={<Radio />}
                                        label={size.label}
                                    />
                                    {size.price > 0 && (
                                        <Typography color="text.secondary">+{size.price.toLocaleString()}đ</Typography>
                                    )}
                                </Box>
                            ))}
                        </RadioGroup>
                    </Box>
                )}

                {/* Độ cay */}
                {item.options?.spicyLevel && (
                    <Box mb={3}>
                        <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                            Độ cay
                        </Typography>
                        <RadioGroup value={selectedSpicy} onChange={(e) => setSelectedSpicy(e.target.value)} row>
                            {item.options?.spicyLevel.map((level: any) => (
                                <FormControlLabel key={level} value={level} control={<Radio />} label={level} />
                            ))}
                        </RadioGroup>
                    </Box>
                )}

                {/* Đá (cho đồ uống) */}
                {item.options?.ice && (
                    <Box mb={3}>
                        <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                            Đá
                        </Typography>
                        <RadioGroup value={selectedIce} onChange={(e) => setSelectedIce(e.target.value)} row>
                            {item.options.ice.map((level: any) => (
                                <FormControlLabel key={level} value={level} control={<Radio />} label={level} />
                            ))}
                        </RadioGroup>
                    </Box>
                )}

                {/* Đường (cho đồ uống) */}
                {item.options?.sugar && (
                    <Box mb={3}>
                        <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                            Đường
                        </Typography>
                        <RadioGroup value={selectedSugar} onChange={(e) => setSelectedSugar(e.target.value)} row>
                            {item.options.sugar.map((level: any) => (
                                <FormControlLabel key={level} value={level} control={<Radio />} label={level} />
                            ))}
                        </RadioGroup>
                    </Box>
                )}

                {/* Topping */}
                {item.options?.toppings && item.options.toppings.length > 0 && (
                    <Box mb={3}>
                        <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                            Topping thêm
                        </Typography>
                        {item.options.toppings.map((topping: any) => (
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <FormControlLabel
                                    key={topping.name}
                                    value={topping.name}
                                    control={
                                        <Checkbox
                                          checked={selectedToppings.includes(topping.id)}
                                          onChange={() => handleToppingChange(topping.id)}
                                        />
                                    }
                                    label={topping.name}
                                />
                                {topping.price > 0 && (
                                    <Typography color="text.secondary">+{topping.price.toLocaleString()}đ</Typography>
                                )}
                            </Box>
                        ))}
                    </Box>
                )}

                {/* Ghi chú */}
                <Box mb={3}>
                    <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                        Ghi chú
                    </Typography>
                    <TextField
                        fullWidth
                        multiline
                        rows={2}
                        placeholder="Ví dụ: Ít đường, không hành..."
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        variant="outlined"
                    />
                </Box>

                {/* Chọn số lượng */}
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="subtitle1" fontWeight="bold">
                        Số lượng
                    </Typography>
                    <Box display="flex" alignItems="center" gap={2}>
                        <IconButton
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            disabled={quantity <= 1}
                            sx={{
                                border: '1px solid #ddd',
                                borderRadius: 1,
                            }}
                        >
                            <RemoveIcon />
                        </IconButton>
                        <Typography variant="h6" fontWeight="bold" minWidth={30} textAlign="center">
                            {quantity}
                        </Typography>
                        <IconButton
                            onClick={() => setQuantity(quantity + 1)}
                            sx={{
                                border: '1px solid #ddd',
                                borderRadius: 1,
                            }}
                        >
                            <AddIcon />
                        </IconButton>
                    </Box>
                </Box>
            </DialogContent>

            {/* Footer với tổng tiền và nút thêm */}
            <DialogActions
                sx={{
                    p: 2,
                    bgcolor: '#f5f5f5',
                    flexDirection: 'column',
                    gap: 1,
                }}
            >
                <Box display="flex" justifyContent="space-between" width="100%" alignItems="center">
                    <Typography variant="body2" color="text.secondary">
                        Tổng cộng
                    </Typography>
                    <Typography variant="h5" color="error" fontWeight="bold">
                        {totalPrice.toLocaleString()} đ
                    </Typography>
                </Box>
                <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    onClick={handleAddToCart}
                    sx={{
                        fontWeight: 'bold',
                        py: 1.5,
                    }}
                >
                    Thêm vào giỏ hàng
                </Button>
            </DialogActions>
        </Dialog>
    );
}
