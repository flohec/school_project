import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import "antd/dist/reset.css";
import "../css/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "test@mail.com" && password === "1234") {
      navigate("/home");
    } else {
      message.error("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>FutureTech Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <p className="forgot-password">
          Forgot your password? <a href="/reset-password">Reset it here</a>
        </p>
        <p className="register">
          New to FutureTech? <a href="/register">Create an account</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
