import { useParams } from "react-router-dom";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import "../css/itemView.css";
import { Avatar, Descriptions, Rate } from "antd";
import { useState } from "react";
import { CaretDownOutlined, CaretUpOutlined, ShoppingCartOutlined } from "@ant-design/icons";
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
  const [isExpanded, setIsExpanded] = useState(false);

  const expandTextbox = () => {
    setIsExpanded((prev) => !prev);
  };

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
              <div className="divider-2"></div>

              <p className="sub-image-title">Color: {color.colorName}</p>

              <div className="sub-choice-row">
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
                    <span style={{ color: subColor.colorText }}></span>
                  </div>
                ))}
              </div>

              <p className="sub-image-title">Storage: </p>

              <div className="sub-choice-row">
                {selectedItem.storage.map((subStorage, index) => (
                  <div
                  key={index}
                  className={`choice-button-storage ${
                      storage.title === subStorage.title ? "active-choice-button" : ""
                    }`}
                    onClick={() => handleStorageClick(subStorage)}
                    >
                      <div className="choice-button-storage-content">
                        <span className="choice-button-storage-title">{subStorage.title}</span>
                        <div className="divider-1"></div>
                        <span className="choice-button-storage-price">{selectedItem.reducedPrice + subStorage.extraPrice}€</span>
                      </div>
                  </div>
                ))}
              </div>

              <div className="row item-price-button-box">
                <div className="price-row">
                  <div>
                    <span className="discount-percent">-{(100 -(price.toFixed(2) / price2.toFixed(2) * 100)).toFixed(1)}%</span>
                    <div className="price">
                      <span className="price-new">{Math.floor(price.toFixed(2))}</span>
                      <span className="price-cent">{(price * 100) % 100}€</span>
                    </div>
                  </div>
                  <span className="price-old">{price2.toFixed(2)}€</span>
                </div>
                <button
                  className="item-add-to-cart-button"
                  onClick={() => addToCart(selectedItem)}
                >
                  <ShoppingCartOutlined className="item-add-to-cart-button-cart-icon" />
                  <span className="item-add-to-cart-button-text">Add to Cart</span>
                </button>
              </div>

            </div>
            <div className="divider-2"></div>
            <div className={`item-description-textbox ${isExpanded ? "is-expanded" : "is-collapsed"}`} >
              <p className="description-title">About this item</p>
              <ul className="item-description-list">
                {selectedItem.itemDescription.map((description, index) => (
                  <li key={index} className="description-list-container">
                    <div>{description}</div>
                  </li>
                ))}
              </ul>
              
              <div className="textbox-expansion-button-container">
                <div className="gradient-box"></div>
                <div className="textbox-expansion-button-button-wrapper">
                  <button
                    className="textbox-expansion-button"
                    onClick={expandTextbox}
                  >
                    <span hidden={!isExpanded} className="text-box-expand-icon"><CaretUpOutlined /></span>
                    <span hidden={isExpanded} className="text-box-expand-icon"><CaretDownOutlined /></span>
                    {isExpanded ? "Collapse" : "Expand"}
                  </button>
                </div>
              </div>
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
