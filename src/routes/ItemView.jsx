import { useParams } from "react-router-dom";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import "../css/itemView.css";
import { Avatar, Rate } from "antd";
import { useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import ReviewCard from "../components/cards/ReviewCard";

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

  const [mainImage, setMainImage] = useState(selectedItem.subImages[0]);
  const [storage, setStorage] = useState(selectedItem.storage[0]);
  const [price, setPrice] = useState(selectedItem.reducedPrice);
  const [price2, setPrice2] = useState(selectedItem.price);

  const handleStorageClick = (subStorage) => {
    setStorage(subStorage);
    setPrice(subStorage.extraPrice + selectedItem.reducedPrice);
    setPrice2(subStorage.extraPrice + selectedItem.price);
  };

  const addToCart = () => {
    console.log("hey");
  };

  return (
    <div className="content">
      <Header sCount={0} cCount={0} data={data} loginDefault={false} />
      <div className="site-content">
        <div className="item-view">
          <div className="left-side">
            <h1 className="item-title">{selectedItem.title}</h1>
            <div className="rating-container">
              <Rate
                allowHalf
                disabled
                defaultValue={selectedItem.rating}
                className="star-rating"
              />
              <p className="star-rating-text">{selectedItem.rating + " (63)"} </p>
            </div>
            <div className="image-group">
              <div className="item-image-gallery">
                {selectedItem.subImages.map((subImage, index) => (
                  <div
                    key={index}
                    className={`sub-image-container ${
                      mainImage.src === subImage.src ? "first-image" : ""
                    }`}
                    onClick={() => setMainImage(subImage)}
                  >
                    <img
                      src={subImage.src}
                      alt={`SubImage ${index + 1}`}
                      className="sub-image"
                    />
                  </div>
                ))}
              </div>

              <div className="main-image">
                <img src={mainImage.src} alt={selectedItem.title} />
              </div>
            </div>
          </div>

          <div className="right-side">
            <div className="item-description">
              {selectedItem.itemDescription}
            </div>

            <p className="sub-image-title">Colour: {mainImage.title}</p>

            <div className="sub-images-row">
              {selectedItem.subImages.map((subImage, index) => (
                <div
                  key={index}
                  className={`choice-button ${
                    mainImage.src === subImage.src ? "first-image" : ""
                  }`}
                  onClick={() => setMainImage(subImage)}
                >
                  <img
                    src={subImage.src}
                    alt={`SubImage ${index + 1}`}
                    className="sub-image"
                  />
                </div>
              ))}
            </div>

            <p className="sub-image-title">Storage: </p>

            <div className="sub-storage-row">
              {selectedItem.storage.map((subStorage, index) => (
                <div
                  key={index}
                  className={`choice-button ${
                    storage.title === subStorage.title ? "first-image" : ""
                  }`}
                  onClick={() => handleStorageClick(subStorage)}
                >
                  <p className="storage-title">{subStorage.title}</p>
                </div>
              ))}
            </div>
            <div className="price-row">
              <p className="canceled-price">{price2.toFixed(2)}€</p>
              <p className="reduced-price-item">{price.toFixed(2) + "€"}</p>
            </div>

            <button
              className="add-to-cart-button-item hoverable-light"
              onClick={() => addToCart(selectedItem)}
            >
              <ShoppingCartOutlined className="cart-icon" />
              <span className="button-text">Add to Cart</span>
            </button>
          </div>
        </div>
      <ReviewCard />
      </div>
      <Footer />
    </div>
  );
};

export default ItemView;
