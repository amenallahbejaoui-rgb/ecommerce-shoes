
import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login submitted:", { email, password });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">LOG IN</h1>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">E-MAIL ADDRESS</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">PASSWORD</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">LOG IN</button>
        </form>

        <div className="login-divider">
          <span>OR</span>
        </div>

        <div className="register-link">
          <span>NOT HAVE AN ACCOUNT?</span>
          <Link to="/register" className="register-btn">REGISTER</Link>
        </div>
      </div>
    </div>
  );
}
