import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./routes/Home";
import ItemView from "./routes/ItemView";
import Orders from "./routes/Orders";
import MyProfile from "./routes/MyProfile";
import Shop from "./routes/Shop";
import { useState } from "react";

function App() {
  const [shoppingCount, setShoppingCount] = useState(0);
  const data = {
    cards: [
      {
        image: "/images/iphone-15-black.avif",
        title: "Iphone 15",
        price: 1199.99,
        reducedPrice: 1049.99,
        subImages: [
          { src: "/images/iphone-15-black.avif", title: "Black" },
          { src: "/images/iphone-15-blue.avif", title: "Blue" },
          { src: "/images/iphone-15-nature.avif", title: "Nature" },
          { src: "/images/iphone-15-white.avif", title: "White" },
        ],
        storage: [
          { title: "128GB", extraPrice: 0 },
          { title: "256GB", extraPrice: 100 },
          { title: "512GB", extraPrice: 150 },
          { title: "1000GB", extraPrice: 200 },
        ],
        reviews: [
          {
            user: "John Doe",
            rating: 5,
            comment: "Excellent phone, love the new features!",
            avatar: "/images/john-avatar.jpg",
          },
          {
            user: "Jane Smith",
            rating: 4,
            comment: "Good phone, but a bit expensive.",
            avatar: "/images/jane-avatar.jpg",
          },
          {
            user: "Alice Johnson",
            rating: 4.5,
            comment: "Amazing performance and camera quality!",
            avatar: "/images/alice-avatar.jpg",
          },
          {
            user: "Mike Lee",
            rating: 3.5,
            comment: "Battery life could be better.",
            avatar: "/images/mike-avatar.webp",
          },
        ],
        rating: 4.5, // Added rating
      },
      {
        image: "/images/iphone-14.webp",
        title: "Iphone 14",
        price: 99.99,
        reducedPrice: 89.99,
        rating: 4.2, // Added rating
      },
      {
        image: "/images/samsung-s23.jpeg",
        title: "Samsung S23",
        price: 999.99,
        reducedPrice: 899.99,
        rating: 4.8, // Added rating
      },
      {
        image: "/images/pixel-9.webp",
        title: "Google Pixel 9",
        price: 99.99,
        reducedPrice: 89.99,
        rating: 3.9, // Added rating
      },
      {
        image: "/images/samsung-a55.webp",
        title: "Samsung A55",
        price: 99.99,
        reducedPrice: 89.99,
        rating: 4.0, // Added rating
      },
      {
        image: "/images/oneplus11.jpg",
        title: "OnePlus 11",
        price: 419.99,
        reducedPrice: 409.99,
        rating: 4.3, // Added rating
      },
      {
        image: "/images/xiaomi13.jpg",
        title: "Xiaomi 13",
        price: 519.99,
        reducedPrice: 479.99,
        rating: 4.1, // Added rating
      },
      {
        image: "/images/honor70.jpg",
        title: "Honor 70",
        price: 319.99,
        reducedPrice: 199.99,
        rating: 3.7, // Added rating
      },
      {
        image: "/images/sonyxperia.jpg",
        title: "Sony Xperia 1 IV",
        price: 469.99,
        reducedPrice: 419.99,
        rating: 4.6, // Added rating
      },
      {
        image: "/images/motorola30.jpeg",
        title: "Motorola Edge 30",
        price: 299.99,
        reducedPrice: 299.99,
        rating: 4.2, // Added rating
      },
    ],

    cards2: [
      {
        image: "/images/greed-7-utlra-pc.webp",
        title: "Greed 7 Ultra-PC",
        price: 1299.99,
        reducedPrice: 1199.99,
        rating: 4.7, // Added rating
      },
      {
        image: "/images/greek2-high-endpc.webp",
        title: "Greek 2 High End",
        price: 999.99,
        reducedPrice: 819.99,
        rating: 4.3, // Added rating
      },
      {
        image: "/images/lenovo-pro-edition.jpeg",
        title: "Lenovo Pro Edition",
        price: 99.99,
        reducedPrice: 89.99,
        rating: 3.8, // Added rating
      },
      {
        image: "/images/office-pc-standard-edition.webp",
        title: "Office PC Standard",
        price: 689.99,
        reducedPrice: 489.99,
        rating: 4.0, // Added rating
      },
      {
        image: "/images/omen-999-next-gen.webp",
        title: "Omen 999 Next Gen",
        price: 2179.99,
        reducedPrice: 1989.99,
        rating: 4.5, // Added rating
      },
      {
        image: "/images/samsungodysseyg5.webp",
        title: "Samsung Odyssey 5",
        price: 499.99,
        reducedPrice: 289.99,
        rating: 4.2, // Added rating
      },
      {
        image: "/images/lgultragear.webp",
        title: "LG Ultragear",
        price: 209.99,
        reducedPrice: 159.99,
        rating: 4.1, // Added rating
      },
      {
        image: "/images/acerqg27.jpeg",
        title: "Acer QG27",
        price: 99.99,
        reducedPrice: 89.99,
        rating: 3.9, // Added rating
      },
      {
        image: "/images/fujitsus26.webp",
        title: "Fujitsu S26",
        price: 689.99,
        reducedPrice: 489.99,
        rating: 4.0, // Added rating
      },
      {
        image: "/images/applestudiodisplay.jpeg",
        title: "Apple Studio Display",
        price: 2179.99,
        reducedPrice: 1989.99,
        rating: 4.6, // Added rating
      },
    ],

    cards3: [
      {
        image: "/images/acer-chromebook-4.webp",
        title: "Acer Chromebook 4",
        price: 399.99,
        reducedPrice: 319.99,
        rating: 4.2, // Added rating
      },
      {
        image: "/images/asus-vivobook.webp",
        title: "Asus Vivobook",
        price: 499.99,
        reducedPrice: 419.99,
        rating: 4.3, // Added rating
      },
      {
        image: "/images/lenovo-ijl15.webp",
        title: "Lenovo IJL 15",
        price: 389.99,
        reducedPrice: 349.99,
        rating: 3.8, // Added rating
      },
      {
        image: "/images/huawei-matebook-14.webp",
        title: "Huawei Matebook 9",
        price: 899.99,
        reducedPrice: 729.99,
        rating: 4.0, // Added rating
      },
      {
        image: "/images/hp-17.webp",
        title: "HP 17",
        price: 2179.99,
        reducedPrice: 1989.99,
        rating: 4.5, // Added rating
      },
      {
        image: "/images/xps13.avif",
        title: "Dell XPS 13",
        price: 1299.99,
        reducedPrice: 1199.99,
        rating: 4.6, // Added rating
      },
      {
        image: "/images/applemacbook.avif",
        title: "Apple MacBook Air",
        price: 1199.99,
        reducedPrice: 1099.99,
        rating: 4.3, // Added rating
      },
      {
        image: "/images/hpextra.avif",
        title: "HP Spectre x360",
        price: 1399.99,
        reducedPrice: 1299.99,
        rating: 4.4, // Added rating
      },
      {
        image: "/images/asus14.jpeg",
        title: "ASUS Zephyrus G14",
        price: 1499,
        reducedPrice: 1399,
        rating: 4.1, // Added rating
      },
      {
        image: "/images/surface.webp",
        title: "Microsoft Surface 4",
        price: 999.99,
        reducedPrice: 899.99,
        rating: 4.0, // Added rating
      },
    ],
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={
            <Home
              sCount={shoppingCount}
              cCount={setShoppingCount}
              data={data}
            />
          }
        />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/item/:item" element={<ItemView data={data} />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;
