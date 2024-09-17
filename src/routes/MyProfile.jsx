import Header from "../components/main/Header";
import "../css/Home.css";

function MyProfile({ sCount, cCount }) {
  return (
    <div>
      <Header sCount={sCount} cCount={cCount} />
      <div className="content"></div>
    </div>
  );
}

export default MyProfile;
