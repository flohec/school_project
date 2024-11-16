import { useParams } from "react-router-dom";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import "../css/itemView.css";
import { Avatar, Descriptions, Rate } from "antd";
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
  const [imageGallery, setImageGallery] = useState(selectedItem.galleryImages[0])
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mainImage, setMainImage] = useState(imageGallery.images[0]);
  const [color, setColor] = useState(selectedItem.colors[0]);
  const [storage, setStorage] = useState(selectedItem.storage[0]);
  const [price, setPrice] = useState(selectedItem.reducedPrice);
  const [price2, setPrice2] = useState(selectedItem.price);

  const handleStorageClick = (subStorage) => {
    setStorage(subStorage);
    setPrice(subStorage.extraPrice + selectedItem.reducedPrice);
    setPrice2(subStorage.extraPrice + selectedItem.price);
  };

  const handleColorChange = (subColor) => {
    const newGallery = selectedItem.galleryImages.find(
      (gallery) => gallery.index === subColor.index
    );
    
    setImageGallery(newGallery);

    let validImageIndex 
    if(currentImageIndex < newGallery.images.length){
      validImageIndex = currentImageIndex
    } else {
      validImageIndex = newGallery.images.length - 1;
    }
    
    setMainImage(newGallery.images[validImageIndex]);
    setCurrentImageIndex(validImageIndex)
  
    setColor(subColor);
  };

  const handleImageChange = (subImage, index) => {
    setMainImage(subImage);
    setCurrentImageIndex(index);
  };
  
  
  const addToCart = () => {
    console.log("hey");
  };

  return (
    <div className="content">
      <Header sCount={0} cCount={0} data={data} loginDefault={false} />
      <div className="site-content">
        <div className="item-body">
          <div className="item-image-group">
            <div className="item-image-gallery">
              {imageGallery.images.map((subImage, index) => (
                <div
                  key={index}
                  className={`${
                    mainImage.src === subImage.src ? "active-image" : "sub-image-container"
                  }`}
                  onClick={() => handleImageChange(subImage, index)}
                >
                  <img
                    src={subImage.src}
                    alt={`SubImage ${index + 1}`}
                    className="sub-image"
                  />
                </div>
              ))}
            </div>

            <div className="item-main-image-container">
              <img className="item-main-image" src={mainImage.src} alt={selectedItem.title} />
            </div>
          </div>
          <div className="item-details">
            <div className="item-details-button-area">
              <h1 className="item-title">{selectedItem.title}</h1>
              <div className="rating-container">
                <p className="star-rating-text">{selectedItem.rating} </p>
                <Rate
                  allowHalf
                  disabled
                  defaultValue={selectedItem.rating}
                  className="star-rating"
                  />
                <p className="star-rating-text">(63) ratings</p>
              </div>
              <div className="divider"></div>

              <p className="sub-image-title">Color: {color.colorName}</p>

              <div className="sub-images-row">
                {selectedItem.colors.map((subColor, index) => (
                  <div
                  key={index}
                  className={`choice-button-color ${
                      color.colorName === subColor.colorName ? "active-choice-button" : ""
                    }`}
                    onClick={() =>
                      handleColorChange(subColor)
                    }
                    style={{ backgroundColor: subColor.colorHex }}
                  >
                    <span className="color-title" style={{ color: subColor.colorText }}>
                      {subColor.colorName}
                    </span>
                  </div>
                ))}
              </div>

              <p className="sub-image-title">Storage: </p>

              <div className="sub-storage-row">
                {selectedItem.storage.map((subStorage, index) => (
                  <div
                  key={index}
                  className={`choice-button-text ${
                      storage.title === subStorage.title ? "active-choice-button" : ""
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
            <div className="divider"></div>
            <div className="item-description">
              <p className="description-title">About this item</p>
              <ul>
                {selectedItem.itemDescription.map((description, index) => (
                  <li key={index} className="description-list-container">
                    <div>{description}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      <ReviewCard />
      </div>
      <Footer />
    </div>
  );
};

export default ItemView;
