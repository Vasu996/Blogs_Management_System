import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "./Login.css"; // Import the same CSS for consistent styling

const Register = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (data.token) {
        await login(email, password); // Auto-login after registration
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Create an Account</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <table>
            <tbody>
              <tr>
                <td><label>Name:</label></td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td><label>Email:</label></td>
                <td>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td><label>Password:</label></td>
                <td>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" className="login-btn">Register</button>
          <p className="toggle-text">
            Already have an account?{" "}
            <Link to="/login" className="toggle-link">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
