import CardContainer from "../components/cards/CardContainer";
import CarouselCard from "../components/cards/Carousel";
import Footer from "../components/main/Footer";
import Header from "../components/main/Header";
import "../css/Home.css";

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
      <Footer />
    </div>
  );
}

export default Home;
