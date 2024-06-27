import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };

  return (
    <div className="login-container">
      {" "}
      {/* Apply the styles from Login.css */}
      <form className="login-form" onSubmit={handleSubmit}>
        <h3>Rider SignUp</h3>

        <div className="form-group">
          <label>Email address:</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button className="btn-login" disabled={isLoading}>
          {isLoading ? "Signing up in..." : "Sign Up"}
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default LoginSignup;
