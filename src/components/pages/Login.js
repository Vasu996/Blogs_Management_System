import React, { useState } from "react";
import "./Login.css"; // Import CSS for styling

function Login() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Title */}
        <h2 className="login-title">
          {isRegister ? "Create an Account" : "Welcome Back"}
        </h2>

        {/* Form Inside a Table */}
        <form className="login-form">
          <table>
            <tbody>
              {isRegister && (
                <tr>
                  <td><label>Full Name:</label></td>
                  <td><input type="text" placeholder="Enter your name" /></td>
                </tr>
              )}
              <tr>
                <td><label>Email:</label></td>
                <td><input type="email" placeholder="Enter your email" /></td>
              </tr>
              <tr>
                <td><label>Password:</label></td>
                <td><input type="password" placeholder="Enter your password" /></td>
              </tr>
              {isRegister && (
                <tr>
                  <td><label>Confirm Password:</label></td>
                  <td><input type="password" placeholder="Confirm your password" /></td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Forgot Password */}
          {!isRegister && (
            <p className="forgot-password">Forgot Password?</p>
          )}

          {/* Button */}
          <button className="login-btn">
            {isRegister ? "Sign Up" : "Log In"}
          </button>
        </form>

        {/* Toggle between Login/Register */}
        <p className="toggle-text">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <span className="toggle-link" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "Log In" : "Register Now"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
