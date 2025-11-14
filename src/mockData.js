// mockData.js
export const menuData = [
  // Món chính - có size và độ cay
  {
    id: 1,
    name: "Phở bò",
    price: 45000,
    img: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400",
    category: "main_dish",
    description: "Phở bò truyền thống với nước dùng ninh từ xương 24 giờ",
    options: {
      size: [
        { label: "Nhỏ ", price: 0 },
        { label: "Vừa ", price: 10000 },
        { label: "Lớn ", price: 20000 }
      ],
      spicyLevel: ["Không cay", "Ít cay", "Cay", "Rất cay"],
      toppings: [
        { id: "t1 ", name: "Thêm thịt bò", price: 15000 },
        { id: "t2 ", name: "Thêm trứng", price: 5000 },
        { id: "t3 ", name: "Thêm rau sống", price: 3000 }
      ]
    }
  },

  // Món cơm - có size và độ cay
  {
    id: 2,
    name: "Cơm gà xối mỡ",
    price: 35000,
    img: "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?w=400",
    category: "main_dish",
    description: "Cơm gà Hải Nam thơm ngon với nước sốt đặc biệt",
    options: {
      size: [
        { label: "Nhỏ ", price: 0 },
        { label: "Vừa ", price: 8000 },
        { label: "Lớn ", price: 15000 }
      ],
      spicyLevel: ["Không cay", "Ít cay", "Cay", "Rất cay"],
      toppings: [
        { id: "t4 ", name: "Thêm trứng ốp la", price: 8000 },
        { id: "t5 ", name: "Thêm thịt gà", price: 20000 }
      ]
    }
  },

  // Đồ uống - có size, đá, đường
  {
    id: 3,
    name: "Trà sữa trân châu",
    price: 35000,
    img: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=400",
    category: "drink",
    description: "Trà sữa trân châu đường đen thơm ngon, béo ngậy",
    options: {
      size: [
        { label: "M ", price: 0 },
        { label: "L ", price: 10000 }
      ],
      ice: ["0%", "50%", "100%"],
      sugar: ["0%", "30%", "50%", "70%", "100%"],
      toppings: [
        { id: "t6 ", name: "Trân châu đen", price: 5000 },
        { id: "t7 ", name: "Thạch", price: 5000 },
        { id: "t8 ", name: "Pudding", price: 8000 }
      ]
    }
  },

  // Cà phê - có đá, đường
  {
    id: 4,
    name: "Cà phê sữa đá",
    price: 25000,
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400",
    category: "drink",
    description: "Cà phê phin truyền thống Việt Nam",
    options: {
      size: [
        { label: "Nhỏ", price: 0 },
        { label: "Lớn", price: 10000 }
      ],
      ice: ["0%", "50%", "100%"],
      sugar: ["0%", "30%", "50%", "70%", "100%"],
      toppings: []
    }
  },

  // Món tráng miệng - chỉ có size
  {
    id: 5,
    name: "Chè ba màu",
    price: 20000,
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400",
    category: "dessert",
    description: "Chè ba màu truyền thống với đậu, thạch và nước cốt dừa",
    options: {
      size: [
        { label: "Nhỏ", price: 0 },
        { label: "Vừa", price: 5000 }
      ],
      toppings: [
        { id: "t9", name: "Thêm nước cốt dừa", price: 5000 }
      ]
    }
  },

  // Món không có options phức tạp
  {
    id: 6,
    name: "Gỏi cuốn",
    price: 30000,
    img: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400",
    category: "appetizer",
    description: "Gỏi cuốn tôm thịt tươi ngon (2 cuốn)",
    options: {
      toppings: []
    }
  },

  // Pizza - có size
  {
    id: 7,
    name: "Pizza Hải Sản",
    price: 120000,
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    category: "main_dish",
    description: "Pizza hải sản tươi ngon với phô mai mozzarella",
    options: {
      size: [
        { label: "Nhỏ (6 inch)", price: 0 },
        { label: "Vừa (9 inch)", price: 40000 },
        { label: "Lớn (12 inch)", price: 80000 }
      ],
      spicyLevel: ["Không cay", "Ít cay", "Cay", "Rất cay"],
      toppings: [
        { id: "t10", name: "Thêm phô mai", price: 20000 },
        { id: "t11", name: "Thêm tôm", price: 30000 },
        { id: "t12", name: "Thêm mực", price: 25000 }
      ]
    }
  },

  // Nước ép - không có đá, đường phức tạp
  {
    id: 8,
    name: "Sinh tố bơ",
    price: 30000,
    img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400",
    category: "drink",
    description: "Sinh tố bơ sánh mịn, béo ngậy",
    options: {
      size: [
        { label: "Vừa", price: 0 },
        { label: "Lớn", price: 10000 }
      ],
      sugar: true,
      toppings: [
        { id: "t13", name: "Thêm sữa đặc", price: 5000 }
      ]
    }
  }
];