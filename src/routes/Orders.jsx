import Header from "../components/main/Header";
import "../css/Orders.css";
import OrderContainer from "../components/order/OrderContainer";
import OrderBox from "../components/order/OrderBox";
import { useState } from "react";
import Dashboard from "../components/cards/Dashboard";
import Footer from "../components/main/Footer";

function Orders({ sCount, cCount }) {
  const order1 = {
    status: "success",
    orderNumber: "SE-45678",
    price: "456.99€",
  };
  const order2 = {
    status: "failure",
    orderNumber: "SE-45679",
    price: "230.95€",
  };
  const order3 = {
    status: "success",
    orderNumber: "SE-45680",
    price: "230.95€",
  };
  const order4 = {
    status: "waiting",
    orderNumber: "SE-45681",
    price: "1200.99€",
  };

  const orderTimeline1 = [
    {
      color: "green",
      text: "Created the order - 01.07.2024 9:56",
    },
    {
      color: "green",
      text: "The order has been successfully received by us - 01.07.2024 09:59",
    },
    {
      color: "green",
      text: "Your package has been handed over to DHL - 01.07.2024 17:34",
    },
    {
      color: "green",
      text: "Your package will arrive in the next 30 minutes - 02.07.2024 9:56",
    },
    {
      color: "green",
      text: "The order was delivered to your location - 02.07.2024 10:12",
    },
  ];

  const orderTimeline2 = [
    {
      color: "green",
      text: "Created the order - 10.07.2024 19:12",
    },
    {
      color: "green",
      text: "The order has been successfully received by us - 10.07.2024 19:16",
    },
    {
      color: "green",
      text: "Your package has been handed over to DHL - 11.07.2024 6:46",
    },
    {
      color: "red",
      text: "DHL lost your package - 13.07.2024 16:10",
    },
    {
      color: "red",
      text: "The order was canceled - 13.07.2024 17:45",
    },
  ];

  const orderTimeline3 = [
    {
      color: "green",
      text: "Created the order - 03.08.2024 14:55",
    },
    {
      color: "green",
      text: "The order has been successfully received by us - 03.08.2024 14:57",
    },
    {
      color: "green",
      text: "Your package has been handed over to DHL - 03.08.2024 20:51",
    },
    {
      color: "green",
      text: "Your package will arrive in the next 30 minutes - 05.08.2024 08:22",
    },
    {
      color: "green",
      text: "The order was handed over to your adresse - 05.08.2024 08:47",
    },
  ];

  const orderTimeline4 = [
    {
      color: "green",
      text: "Created the order - 08.09.2024 15:06",
    },
    {
      color: "green",
      text: "The order has been successfully received by us - 08.09.2024 15:27",
    },
    {
      color: "green",
      text: "Your package has been handed over to DHL - 09.09.2024 09:01",
    },
    {
      color: "grey",
      text: "Your package will arrive in the next 30 minutes - incoming",
    },
    {
      color: "grey",
      text: "The order was handed over to your adresse - incoming",
    },
  ];

  const timelines = {
    "SE-45678": orderTimeline1,
    "SE-45679": orderTimeline2,
    "SE-45680": orderTimeline3,
    "SE-45681": orderTimeline4,
  };

  const [activeOrder, setActiveOrder] = useState(orderTimeline1);
  const [selectedOrderNumber, setSelectedOrderNumber] = useState("SE-45678");

  const handleOrderClick = (orderNumber) => {
    const selectedTimeline = timelines[orderNumber] || orderTimeline1;
    const selectedOrderItems = setActiveOrder(selectedTimeline);
    setSelectedOrderNumber(orderNumber);
  };

  return (
    <div>
      <Header sCount={sCount} cCount={cCount} />
      <div className="order-container-box">
        <div className="orders-content">
          <div className="order-card">
            <div className="order-boxes">
              <p className="order-text">My Orders</p>

              <OrderBox
                data={order1}
                onClick={handleOrderClick}
                isSelected={selectedOrderNumber === order1.orderNumber}
              />
              <OrderBox
                data={order2}
                onClick={handleOrderClick}
                isSelected={selectedOrderNumber === order2.orderNumber}
              />
              <OrderBox
                data={order3}
                onClick={handleOrderClick}
                isSelected={selectedOrderNumber === order3.orderNumber}
              />
              <OrderBox
                data={order4}
                onClick={handleOrderClick}
                isSelected={selectedOrderNumber === order4.orderNumber}
              />
            </div>
          </div>

          <div className="order-container-card">
            <OrderContainer data={activeOrder} />
          </div>
        </div>
        <Dashboard />
      </div>
      <Footer />
    </div>
  );
}

export default Orders;
