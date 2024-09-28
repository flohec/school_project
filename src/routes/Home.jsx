import CardContainer from "../components/cards/CardContainer";
import CarouselCard from "../components/cards/Carousel";
import Header from "../components/main/Header";
import "../css/Home.css";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

function Home({ sCount, cCount, data }) {
  return (
    <div className="content">
      <Header
        sCount={sCount}
        cCount={cCount}
        data={data}
        loginDefault={false}
      />
      <CarouselCard />
      <CardContainer
        data={data?.cards}
        title="Smartphones"
        sCount={sCount}
        cCount={cCount}
      />
      <CardContainer
        data={data?.cards2}
        title="PCs and Screens"
        sCount={sCount}
        cCount={cCount}
      />
      <CardContainer
        data={data?.cards3}
        title="Notebooks"
        sCount={sCount}
        cCount={cCount}
      />
      <div className="footer">
        <div className="footer-imprint"></div>
        <div className="footer-trust-seals"></div>
      </div>
    </div>
  );
}

export default Home;
