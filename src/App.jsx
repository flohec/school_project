import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        image: "/images/iphone-15.webp",
        title: "Iphone 15",
        price: 100,
        reducedPrice: 90,
        rating: 4.5, // Added rating
      },
      {
        image: "/images/iphone-14.webp",
        title: "Iphone 14",
        price: 100,
        reducedPrice: 90,
        rating: 4.2, // Added rating
      },
      {
        image: "/images/samsung-s23.jpeg",
        title: "Samsung S23",
        price: 999,
        reducedPrice: 899,
        rating: 4.8, // Added rating
      },
      {
        image: "/images/pixel-9.webp",
        title: "Google Pixel 9",
        price: 100,
        reducedPrice: 90,
        rating: 3.9, // Added rating
      },
      {
        image: "/images/samsung-a55.webp",
        title: "Samsung A55",
        price: 100,
        reducedPrice: 90,
        rating: 4.0, // Added rating
      },
      {
        image: "/images/oneplus11.jpg",
        title: "OnePlus 11",
        price: 419,
        reducedPrice: 409,
        rating: 4.3, // Added rating
      },
      {
        image: "/images/xiaomi13.jpg",
        title: "Xiaomi 13",
        price: 520,
        reducedPrice: 479,
        rating: 4.1, // Added rating
      },
      {
        image: "/images/honor70.jpg",
        title: "Honor 70",
        price: 319,
        reducedPrice: 199,
        rating: 3.7, // Added rating
      },
      {
        image: "/images/sonyxperia.jpg",
        title: "Sony Xperia 1 IV",
        price: 469,
        reducedPrice: 419,
        rating: 4.6, // Added rating
      },
      {
        image: "/images/motorola30.jpeg",
        title: "Motorola Edge 30",
        price: 299,
        reducedPrice: 299,
        rating: 4.2, // Added rating
      },
    ],

    cards2: [
      {
        image: "/images/greed-7-utlra-pc.webp",
        title: "Greed 7 Ultra-PC",
        price: 1299,
        reducedPrice: 1199,
        rating: 4.7, // Added rating
      },
      {
        image: "/images/greek2-high-endpc.webp",
        title: "Greek 2 High End",
        price: 999,
        reducedPrice: 820,
        rating: 4.3, // Added rating
      },
      {
        image: "/images/lenovo-pro-edition.jpeg",
        title: "Lenovo Pro Edition",
        price: 100,
        reducedPrice: 90,
        rating: 3.8, // Added rating
      },
      {
        image: "/images/office-pc-standard-edition.webp",
        title: "Office PC Standard",
        price: 689,
        reducedPrice: 490,
        rating: 4.0, // Added rating
      },
      {
        image: "/images/omen-999-next-gen.webp",
        title: "Omen 999 Next Gen",
        price: 2179,
        reducedPrice: 1990,
        rating: 4.5, // Added rating
      },
      {
        image: "/images/samsungodysseyg5.webp",
        title: "Samsung Odyssey 5",
        price: 499,
        reducedPrice: 289,
        rating: 4.2, // Added rating
      },
      {
        image: "/images/lgultragear.webp",
        title: "LG Ultragear",
        price: 209,
        reducedPrice: 159,
        rating: 4.1, // Added rating
      },
      {
        image: "/images/acerqg27.jpeg",
        title: "Acer QG27",
        price: 100,
        reducedPrice: 90,
        rating: 3.9, // Added rating
      },
      {
        image: "/images/fujitsus26.webp",
        title: "Fujitsu S26",
        price: 689,
        reducedPrice: 490,
        rating: 4.0, // Added rating
      },
      {
        image: "/images/applestudiodisplay.jpeg",
        title: "Apple Studio Display",
        price: 2179,
        reducedPrice: 1990,
        rating: 4.6, // Added rating
      },
    ],

    cards3: [
      {
        image: "/images/acer-chromebook-4.webp",
        title: "Acer Chromebook 4",
        price: 399,
        reducedPrice: 320,
        rating: 4.2, // Added rating
      },
      {
        image: "/images/asus-vivobook.webp",
        title: "Asus Vivobook",
        price: 499,
        reducedPrice: 419,
        rating: 4.3, // Added rating
      },
      {
        image: "/images/lenovo-ijl15.webp",
        title: "Lenovo IJL 15",
        price: 390,
        reducedPrice: 349,
        rating: 3.8, // Added rating
      },
      {
        image: "/images/huawei-matebook-14.webp",
        title: "Huawei Matebook 9",
        price: 899,
        reducedPrice: 729,
        rating: 4.0, // Added rating
      },
      {
        image: "/images/hp-17.webp",
        title: "HP 17",
        price: 2179,
        reducedPrice: 1990,
        rating: 4.5, // Added rating
      },
      {
        image: "/images/xps13.avif",
        title: "Dell XPS 13",
        price: 1299,
        reducedPrice: 1199,
        rating: 4.6, // Added rating
      },
      {
        image: "/images/applemacbook.avif",
        title: "Apple MacBook Air",
        price: 1199,
        reducedPrice: 1099,
        rating: 4.3, // Added rating
      },
      {
        image: "/images/hpextra.avif",
        title: "HP Spectre x360",
        price: 1399,
        reducedPrice: 1299,
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
        price: 999,
        reducedPrice: 899,
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
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
