import { Timeline } from "antd";
import "../../css/OrderContainer.css";
import { SmileOutlined } from "@ant-design/icons";

function OrderContainer({ data = [] }) {
  return (
    <div className="horizontal-timeline-container">
      <Timeline>
        {data.map((item, index) => (
          <Timeline.Item key={index} color={item.color || "red"}>
            {item.text || ""}
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
}

export default OrderContainer;