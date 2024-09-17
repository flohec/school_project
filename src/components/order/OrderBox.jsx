import {
  CloseOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import "../../css/Orders.css";

function OrderBox({ data, onClick, isSelected }) {
  const handleClick = () => {
    onClick(data.orderNumber);
  };
  let statusIcon;
  let statusColor;

  switch (data.status) {
    case "failure":
      statusIcon = <CloseOutlined />;
      statusColor = "red";
      break;
    case "waiting":
      statusIcon = <ClockCircleOutlined />;
      statusColor = "blue";
      break;
    case "success":
      statusIcon = <CheckCircleOutlined />;
      statusColor = "green";
      break;
    default:
      statusIcon = <ClockCircleOutlined />;
      statusColor = "gray"; // Default color if no status is provided
  }

  return (
    <div
      className={`${
        isSelected ? "order-box-active" : "order-box"
      } hoverable-light`}
      onClick={handleClick}
    >
      <div className="order-number">Order No: {data.orderNumber}</div>
      <div className="order-price">{data.price}</div>
      <div className="status-icon" style={{ color: statusColor }}>
        {statusIcon}
      </div>
    </div>
  );
}

export default OrderBox;
