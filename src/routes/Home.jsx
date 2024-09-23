import CardContainer from "../components/cards/CardContainer";
import Header from "../components/main/Header";
import "../css/Home.css";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

const cards = [
  {
    image: "/images/iphone-15.webp",
    title: "Iphone 15",
    price: 100,
    reducedPrice: 90,
  },
  {
    image: "/images/iphone-14.webp",
    title: "Iphone 14",
    price: 100,
    reducedPrice: 90,
  },
  {
    image: "/images/samsung-s23.jpeg",
    title: "Samsung S23",
    price: 999,
    reducedPrice: 899,
  },
  {
    image: "/images/pixel-9.webp",
    title: "Google Pixel 9",
    price: 100,
    reducedPrice: 90,
  },
  {
    image: "/images/samsung-a55.webp",
    title: "Samsung A55",
    price: 100,
    reducedPrice: 90,
  },
  {
    image: "/images/oneplus11.jpg",
    title: "OnePlus 11",
    price: 419,
    reducedPrice: 409,
  },
  {
    image: "/images/xiaomi13.jpg",
    title: "Xiaomi 13",
    price: 520,
    reducedPrice: 479,
  },
  {
    image: "/images/honor70.jpg",
    title: "Honor 70",
    price: 319,
    reducedPrice: 199,
  },
  {
    image: "/images/sonyxperia.jpg",
    title: "Sony Xperia 1 IV",
    price: 469,
    reducedPrice: 419,
  },
  {
    image: "/images/motorola30.jpeg",
    title: "Motorola Edge 30",
    price: 299,
    reducedPrice: 299,
  },
];

const cards2 = [
  {
    image: "/images/greed-7-utlra-pc.webp",
    title: "Greed 7 Ultra-PC",
    price: 1299,
    reducedPrice: 1199,
  },
  {
    image: "/images/greek2-high-endpc.webp",
    title: "Greek 2 High End",
    price: 999,
    reducedPrice: 820,
  },
  {
    image: "/images/lenovo-pro-edition.jpeg",
    title: "Lenovo Pro Edition",
    price: 100,
    reducedPrice: 90,
  },
  {
    image: "/images/office-pc-standard-edition.webp",
    title: "Office PC Standard",
    price: 689,
    reducedPrice: 490,
  },
  {
    image: "/images/omen-999-next-gen.webp",
    title: "Omen 999 Next Gen",
    price: 2179,
    reducedPrice: 1990,
  },
  {
    image: "/images/samsungodysseyg5.webp",
    title: "Samsung Odyssey 5",
    price: 499,
    reducedPrice: 289,
  },
  {
    image: "/images/lgultragear.webp",
    title: "LG Ultragear",
    price: 209,
    reducedPrice: 159,
  },
  {
    image: "/images/acerqg27.jpeg",
    title: "Acer QG27",
    price: 100,
    reducedPrice: 90,
  },
  {
    image: "/images/fujitsus26.webp",
    title: "Fujitsu S26",
    price: 689,
    reducedPrice: 490,
  },
  {
    image: "/images/applestudiodisplay.jpeg",
    title: "Apple Studio Display",
    price: 2179,
    reducedPrice: 1990,
  },
];

const cards3 = [
  {
    image: "/images/acer-chromebook-4.webp",
    title: "Acer Chromebook 4",
    price: 399,
    reducedPrice: 320,
  },
  {
    image: "/images/asus-vivobook.webp",
    title: "Asus Vivobook",
    price: 499,
    reducedPrice: 419,
  },
  {
    image: "/images/lenovo-ijl15.webp",
    title: "Lenovo IJL 15",
    price: 390,
    reducedPrice: 349,
  },
  {
    image: "/images/huawei-matebook-14.webp",
    title: "Huawei Matebook 9",
    price: 899,
    reducedPrice: 729,
  },
  {
    image: "/images/hp-17.webp",
    title: "HP 17",
    price: 2179,
    reducedPrice: 1990,
  },
  {
    image: "/images/xps13.avif",
    title: "Dell XPS 13",
    price: 1299,
    reducedPrice: 1199,
  },
  {
    image: "/images/applemacbook.avif",
    title: "Apple MacBook Air",
    price: 1199,
    reducedPrice: 1099,
  },
  {
    image: "/images/hpextra.avif",
    title: "HP Spectre x360",
    price: 1399,
    reducedPrice: 1299,
  },
  {
    image: "/images/asus14.jpeg",
    title: "ASUS Zephyrus G14",
    price: 1499,
    reducedPrice: 1399,
  },
  {
    image: "/images/surface.webp",
    title: "Microsoft Surface 4",
    price: 999,
    reducedPrice: 899,
  },
];

function Home({ sCount, cCount }) {
  return (
    <div className="content">
      <Header sCount={sCount} cCount={cCount} />
      <div className="header-sub-row"></div>
      <div className="bpc-carroussel">
        <div className="bpc-carroussel-image">
          <button className="bpc-carroussel-button left">
            <LeftOutlined />
          </button>
          <button className="bpc-carroussel-button right">
            <RightOutlined />
          </button>
        </div>
      </div>

      <div className="category-carrousels">
        <CardContainer
          data={cards}
          title="Smartphones"
          sCount={sCount}
          cCount={cCount}
        />
        <CardContainer
          data={cards2}
          title="PCs and Screens"
          sCount={sCount}
          cCount={cCount}
        />
        <CardContainer
          data={cards3}
          title="Notebooks"
          sCount={sCount}
          cCount={cCount}
        />
      </div>
      <div className="footer">
        <div className="footer-imprint"></div>
        <div className="footer-trust-seals"></div>
      </div>
    </div>
  );
}

export default Home;
