import { useParams } from "react-router-dom";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import "../css/itemView.css";
import { Button, Rate } from "antd";

const ItemView = ({ data }) => {
  const { item } = useParams();

  let selectedItem = null;

  Object.keys(data).forEach((key) => {
    const array = data[key];

    for (let i = 0; i < array.length; i++) {
      if (array[i].title === item) {
        selectedItem = array[i];
        break;
      }
    }
  });

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  return (
    <div className="content">
      <Header sCount={0} cCount={0} data={data} loginDefault={false} />

      <div className="item-view">
        <div className="left-side">
          <div className="rating-container">
            <Rate
              allowHalf
              defaultValue={selectedItem.rating}
              className="star-rating"
            />
            <p className="star-rating-text">{selectedItem.rating + " (63)"} </p>
          </div>

          <h1 className="item-title">{selectedItem.title}</h1>

          <div className="main-image">
            <img src={selectedItem.image} alt={selectedItem.title} />
          </div>

          <div className="image-gallery">
            <img
              src={selectedItem.image}
              alt="Additional 1"
              className="gallery-image"
            />
            <img
              src={selectedItem.image}
              alt="Additional 2"
              className="gallery-image"
            />
            <img
              src={selectedItem.image}
              alt="Additional 3"
              className="gallery-image"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ItemView;
