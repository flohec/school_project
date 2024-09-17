import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Orders from "./routes/Orders";
import MyProfile from "./routes/MyProfile";
import { useState } from "react";

function App() {
  const [shoppingCount, setShoppingCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={<Home sCount={shoppingCount} cCount={setShoppingCount} />}
        />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  );
}

export default App;
