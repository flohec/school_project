import CardContainer from "../components/cards/CardContainer";
import Header from "../components/main/Header";
import "../css/Home.css";

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
    price: 100,
    reducedPrice: 90,
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
];

function Home({ sCount, cCount }) {
  return (
    <div>
      <Header sCount={sCount} cCount={cCount} />
      <div className="content">
        <CardContainer
          data={cards}
          title="Smartphones"
          sCount={sCount}
          cCount={cCount}
        />
        <CardContainer data={cards} title="PCs" />
        <CardContainer data={cards} title="Notebooks" />
      </div>
    </div>
  );
}

export default Home;
