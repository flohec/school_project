import { useParams } from "react-router-dom";

const ItemView = ({ data }) => {
  const { item } = useParams();

  return <div>Item: {item}</div>;
};

export default ItemView;
