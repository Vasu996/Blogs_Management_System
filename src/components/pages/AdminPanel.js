import React from "react";
import { Link } from "react-router-dom";

// Dummy data for users and blogs (Replace with API data)
const users = [
  { id: 1, name: "Alice", role: "registered" },
  { id: 2, name: "Bob", role: "registered" },
];

const blogs = [
  { id: 1, title: "Admin Guide", author: "Alice" },
  { id: 2, title: "React Best Practices", author: "Bob" },
];

const AdminPanel = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      
      <div className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="border-b py-2 flex justify-between">
              <span>{user.name} ({user.role})</span>
              <button className="text-red-600 hover:underline">Remove</button>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Manage Blogs</h2>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id} className="border-b py-2 flex justify-between">
              <Link to={`/blog/${blog.id}`} className="text-blue-600 hover:underline">
                {blog.title}
              </Link>
              <span>by {blog.author}</span>
              <button className="text-red-600 hover:underline">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
