import { Timeline } from "antd";
import "../../css/OrderContainer.css";

function OrderContainer({ data = [] }) {
  return (
    <div>
      <p className="order-text">Timeline</p>

      <div className="horizontal-timeline-container">
        <Timeline className="custom-timeline">
          {data.map((item, index) => (
            <Timeline.Item key={index} color={item.color || "red"}>
              {item.text || ""}
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </div>
  );
}

export default OrderContainer;
