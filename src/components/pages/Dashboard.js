import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./Dashboard.css";

// ✅ Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const { user, token } = useAuth();
  const [blogs, setBlogs] = useState([]);
  const [analytics, setAnalytics] = useState({
    totalBlogs: 9,
    totalLikes: 100,
    totalComments: 50,
    totalShares: 450,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchUserBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/blogs/my-blogs", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`, // Ensure token is sent
          },
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        console.log("Blogs fetched:", data);
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error.message);
      }
    };
    
    fetchUserBlogs();
  }, [token]);

  // Filter & Sort Blogs
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    return sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
  });

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      {/* Dashboard Header */}
      <div className="text-center mt-10">
        <h1 className="text-4xl font-extrabold text-gray-900">
          My <span className="text-blue-600">Dashboard</span>
        </h1>
        <p className="text-lg text-gray-700 mt-2">Manage your blogs and track performance.</p>
      </div>

      {/* Dashboard Stats */}
      <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="stat-card">
          <h2 className="text-3xl font-bold">{analytics.totalBlogs}</h2>
          <p>Total Blogs</p>
        </div>
        <div className="stat-card">
          <h2 className="text-3xl font-bold">{analytics.totalLikes}</h2>
          <p>Total Likes</p>
        </div>
        <div className="stat-card">
          <h2 className="text-3xl font-bold">{analytics.totalComments}</h2>
          <p>Total Comments</p>
        </div>
      </div>

      {/* Blog Performance Chart */}
      <div className="container mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
        <h3 className="text-xl font-semibold mb-4">Blog Performance</h3>
        <div style={{ height: "300px" }}>
          <Bar
            data={{
              labels: ["Blogs", "Likes", "Comments", "Shares"],
              datasets: [
                {
                  label: "Statistics",
                  data: [
                    analytics.totalBlogs || 9,
                    analytics.totalLikes || 0,
                    analytics.totalComments || 0,
                    analytics.totalShares || 0,
                  ],
                  backgroundColor: ["blue", "green", "orange", "purple"],
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false, // Prevents reuse issue
              plugins: {
                legend: { display: true },
              },
            }}
          />
        </div>
      </div>

      {/* Blog Management Section */}
      <div className="container mx-auto mt-12">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">My Blogs</h2>
          <Link to="/blog/create" className="create-blog-btn">
            Create New Blog
          </Link>
        </div>

        {/* Search & Sort Options */}
        <div className="search-sort-container mt-6 flex justify-between">
          <input
            type="text"
            placeholder="Search blogs..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select className="sort-dropdown" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="asc">Sort A-Z</option>
            <option value="desc">Sort Z-A</option>
          </select>
        </div>

        {/* Blog List */}
        <div className="mt-6">
          {sortedBlogs.length > 0 ? (
            <ul className="blog-list">
              {sortedBlogs.map((blog) => (
                <li key={blog._id} className="blog-item">
                  <Link to={`/blog/${blog._id}`} className="blog-title">
                    {blog.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-blogs-text">No blogs available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
