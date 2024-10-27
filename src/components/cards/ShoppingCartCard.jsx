import React, { useState } from "react";
import {
  Select,
  InputNumber,
  Button,
  Input,
  Card,
  Popconfirm,
  notification,
  message,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import "../../css/ShoppingCartCard.css";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

const items = [
  {
    id: 1,
    image: "/images/applemacbook.avif",
    title: "Apple MacBook Air",
    price: 1199.99,
    reducedPrice: 1099.99,
    rating: 4.3, // Added rating
    quantity: 1,
  },
  {
    id: 2,
    image: "/images/iphone-15-black.avif",
    title: "Iphone 15",
    price: 1199.99,
    reducedPrice: 1049.99,
    quantity: 1,
  },
  {
    id: 3,
    image: "/images/lgultragear.webp",
    title: "LG Ultragear",
    price: 209.99,
    reducedPrice: 159.99,
    quantity: 1,
  },
];

function ShoppingCartCard() {
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState(1);
  const [cartItems, setCartItems] = useState(items);
  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    name: "",
    email: "",
    street: "",
    country: "",
    phone: "",
    city: "",
    zip: "",
  });
  const [activeItems, setActiveItems] = useState([true, true, true]);
  const [quantity, setQuantity] = useState([1, 1, 1]);

  const paymentMethod = {
    method: "Credit Card",
    cardNumber: "**** **** **** 1234",
  };

  const costs = function () {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      console.log(activeItems);
      if (activeItems[i]) {
        total += quantity[i] * items[i].reducedPrice; // Use quantity array
      }
    }
    return total.toFixed(2);
  };

  const totalCosts = {
    total: costs() + "€",
    deliveryDate: `Expected Delivery Date: ${new Date(
      Date.now() + 2 * 24 * 60 * 60 * 1000
    ).toLocaleDateString()}`, // Current date + 2 days
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    console.log(billingInfo);
  };

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleQuantityChange = (value, itemId) => {
    const updatedQuantity = [...quantity];
    updatedQuantity[itemId - 1] = value;

    setQuantity(updatedQuantity);

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: value } : item
      )
    );
  };

  const handleDelete = (itemId) => {
    const updatedActiveItems = [...activeItems];
    updatedActiveItems[itemId - 1] = false;

    setActiveItems(updatedActiveItems);
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleNextStep = () => {
    if (activeTab === 2) {
      const newErrors = {};
      if (!billingInfo.firstName)
        newErrors.firstName = "First Name is required.";
      if (!billingInfo.name) newErrors.name = "Last Name is required.";
      if (!billingInfo.email) newErrors.email = "Email Address is required.";
      if (!billingInfo.street) newErrors.street = "Email Address is required.";
      if (!billingInfo.city) newErrors.city = "Email Address is required.";
      if (!billingInfo.zip) newErrors.zip = "Email Address is required.";
      if (!billingInfo.country)
        newErrors.country = "Email Address is required.";

      setErrors(newErrors);

      if (Object.keys(newErrors).length > 0) {
        message.error("Please fill in the required fields.");
        return;
      }
    }
    if (activeTab < 3) {
      setActiveTab(activeTab + 1);
    }
  };

  const handleBeforeStep = () => {
    if (activeTab > 1) {
      setActiveTab(activeTab - 1);
    }
  };

  const handleConfirmOrder = () => {
    notification.success({
      message: "Order Confirmed",
      description: "Your order has been successfully placed!",
      placement: "topRight", // You can change the position
    });
    setTimeout(() => {
      window.location.href = "/home";
    }, 1500);
  };

  const handleCompleteShop = () => {};

  const tabData = [
    { id: 1, name: "Shopping Cart" },
    { id: 2, name: "Billing & Address" },
    { id: 3, name: "Checkout" },
  ];



  return (
    <div className="shopping-cart">
      {/* Top tabs */}
      <div className={`tab-container${activeTab}`}>
        {tabData.map((tab) => (
          <div
            key={tab.id}
            className={`tab-wrapper ${activeTab >= tab.id ? "active-tab" : ""}`}
            onClick={() => handleTabClick(tab.id)}
          >
            <div
              className={`tab-circle ${activeTab >= tab.id ? "active" : ""}`}
            ></div>
            <span className="tab-title">{tab.name}</span>
          </div>
        ))}
      </div>
      <div className="cart-items">
        {activeTab === 1 &&
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              {/* Item image */}
              <img src={item.image} alt={item.title} className="item-image" />
              {/* Item name */}
              <span className="item-name">{item.title}</span>
              {/* Quantity select */}
              <InputNumber
                min={1}
                value={item.quantity}
                onChange={(value) => handleQuantityChange(value, item.id)}
              />
              {/* Price and trash icon */}
              <span className="item-price">
                ${item.reducedPrice * item.quantity}
              </span>
              <DeleteOutlined
                onClick={() => handleDelete(item.id)}
                className="delete-icon"
              />
            </div>
          ))}
        {activeTab === 2 && (
            <div className="billing-form">
              <h3>Billing Information</h3>
              <h3></h3>

              <div className="input-row">
                <span>First Name *</span>
                <Input
                    placeholder="First Name"
                    name="firstName"
                    value={billingInfo.firstName}
                    onChange={handleInputChange}
                    status={errors.firstName ? "error" : ""}
                />
              </div>

              <div className="input-row">
                <span>Name *</span>
                <Input
                    placeholder="Name"
                    name="name"
                    value={billingInfo.name}
                    onChange={handleInputChange}
                    status={errors.name ? "error" : ""}
                />
              </div>

              <div className="input-row">
                <span>Email Address *</span>
                <Input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={billingInfo.email}
                    onChange={handleInputChange}
                    status={errors.email ? "error" : ""}
                />
              </div>

              <div className="input-row">
                <span>Phone Number</span>
                <Input
                    placeholder="Phone Number"
                    name="phone"
                    value={billingInfo.phone}
                    onChange={handleInputChange}
                />
              </div>

              <div className="input-row full-row">
                <span>Street Address *</span>
                <Input
                    placeholder="Street Address"
                    name="street"
                    value={billingInfo.street}
                    onChange={handleInputChange}
                    status={errors.street ? "error" : ""}
                />
              </div>

              <div className="input-row">
                <span>Country *</span>
                <Select
                    placeholder="Select a Country"
                    name="country"
                    value={billingInfo.country}
                    onChange={(value) =>
                        handleInputChange({ target: { name: "country", value } })
                    }
                    status={errors.country ? "error" : ""}
                >
                  <Select.Option value="us">United States</Select.Option>
                  <Select.Option value="de">Germany</Select.Option>
                  <Select.Option value="fr">France</Select.Option>
                </Select>
              </div>

              <div className="input-row">
                <span>City *</span>
                <Input
                    placeholder="City"
                    name="city"
                    value={billingInfo.city}
                    onChange={handleInputChange}
                    status={errors.city ? "error" : ""}
                />
              </div>

              <div className="input-row">
                <span>ZIP Code *</span>
                <Input
                    placeholder="ZIP Code"
                    name="zip"
                    value={billingInfo.zip}
                    onChange={handleInputChange}
                    status={errors.zip ? "error" : ""}
                />
              </div>
            </div>
        )}

        {activeTab === 3 && (
            <div className="order-summary-container">
              <div className="order-details">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item-2">
                      {/* Item image */}
                      <img src={item.image} alt={item.title} className="item-image" />
                      {/* Item name */}
                      <span className="item-name">{item.title}</span>
                      {/* Quantity select */}
                      <InputNumber
                          min={1}
                          disabled
                          value={item.quantity}
                      />
                      {/* Price and trash icon */}
                      <span className="item-price">
            ${item.reducedPrice * item.quantity}
          </span>
                    </div>
                ))}
              </div>

              <div className="order-cards">
                <Card title="Delivery Address" style={{marginBottom: "20px"}}>
                  <p className="first-span">Name: {billingInfo.firstName} {' '}{billingInfo.name}</p>
                  <p className="normal-span">Address: {billingInfo.street}</p>
                  <p className="last-span">
                    City: {billingInfo.city}, {billingInfo.zip}
                  </p>
                  <p className="last-span">
                    Country: {billingInfo.country === "de" ? "Germany" : "USA"}
                  </p>
                </Card>

                <Card title="Payment Method" style={{marginBottom: "20px"}}>
                  <p className="first-span">Method: {paymentMethod.method}</p>
                  <p className="last-span">Card Number: {paymentMethod.cardNumber}</p>
                </Card>

                <Card title="Order Summary">
                  <h3 className="first-span">Total Costs: {totalCosts.total}</h3>
                  <p className="last-span">{totalCosts.deliveryDate}</p>
                </Card>
              </div>
            </div>
        )}

      </div>

      <div className="step-buttons-container">
        <Button
          type="primary"
          onClick={handleBeforeStep}
          disabled={activeTab === 1}
          icon={<LeftOutlined />}
        >
          Previous Step
        </Button>
        {activeTab !== 3 && (
          <Button
            type="primary"
            onClick={handleNextStep}
            disabled={activeTab === 3}
            icon={<RightOutlined />}
          >
            Next Step
          </Button>
        )}
        {activeTab === 3 && (
          <Popconfirm
            title="Confirm the order"
            description="Are you sure to place this order?"
            onConfirm={handleConfirmOrder}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="primary"
              danger
              onClick={handleCompleteShop}
              icon={<RightOutlined />}
            >
              Complete Order
            </Button>
          </Popconfirm>
        )}
      </div>
    </div>
  );
}

export default ShoppingCartCard;
