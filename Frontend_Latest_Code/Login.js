import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const validUserId = "zurich";
    const validPassword = "zurich";

    if (userId === validUserId && password === validPassword) {
      onLogin(true); 
      navigate("/");
    } else {
      alert("Invalid User ID or Password! Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID: </label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};


const styles = {
  container: {
    width: "500px",
    margin: "100px auto",
    padding: "20px",
    border: "1px solid ",
    borderRadius: "5px",
    textAlign: "center",
  },
};

export default Login;