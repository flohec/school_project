import Carousel from "../components/cards/Carousel";
import Header from "../components/main/Header";
import ShoppingCartCard from "../components/cards/ShoppingCartCard";
import "../css/ShoppingCartCard.css";

function Shop({ sCount, cCount }) {
  return (
    <div>
      <Header sCount={sCount} cCount={cCount} />
      <div className="content-test">
        <ShoppingCartCard />
      </div>
    </div>
  );
}

export default Shop;
