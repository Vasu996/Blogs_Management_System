import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles }) {
  const userRole = "registered"; // Simulate user role (change as needed)

  return allowedRoles.includes(userRole) ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
