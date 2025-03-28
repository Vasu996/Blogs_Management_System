import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import BlogDetails from "./components/pages/BlogDetails";
import Dashboard from "./components/pages/Dashboard";
import CreateBlog from "./components/pages/CreateBlog";
import EditBlog from "./components/pages/EditBlog";
import AdminPanel from "./components/pages/AdminPanel";
import NotFound from "./components/pages/NotFound";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Navbar from "./components/pages/Navbar";
import { AuthProvider } from "./components/context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import BlogList from "./components/pages/BlogList";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/blogs" element={<BlogList />} />

            {/* Registered User Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute allowedRoles={["registered"]}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/blog/create"
              element={
                <ProtectedRoute allowedRoles={["registered"]}>
                  <CreateBlog />
                </ProtectedRoute>
              }
            />
            <Route
              path="/blog/edit/:id"
              element={
                <ProtectedRoute allowedRoles={["registered"]}>
                  <EditBlog />
                </ProtectedRoute>
              }
            />

            {/* Admin Routes */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <AdminPanel />
                </ProtectedRoute>
              }
            />

            {/* Catch-All Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
