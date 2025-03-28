import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs([
      { 
        id: 1, 
        title: "Mastering React Hooks", 
        image: "Assets/Mastering React Hooks.png", 
        author: "John Doe", 
        description: "Mastering React Hooks is essential for modern React development, enabling functional components to manage state, side effects, and context without relying on class components." 
      },
      { 
        id: 2, 
        title: "The Future of AI in 2025", 
        image: "Assets/The Future of AI in 2025.jpeg", 
        author: "Jane Smith", 
        description: "Explore AI advancements." 
      },
      { 
        id: 3, 
        title: "Top 10 JavaScript Tips", 
        image: "Assets/CSS Tricks for Developers.jpeg", // Corrected path", 
        author: "Mike Johnson", 
        description: "Improve JavaScript skills." 
      },
      { 
        id: 4, 
        title: "CSS Tricks for Developers", 
        image: "Assets/CSS Tricks for Developers.jpeg", 
        author: "Emily Davis", 
        description: "Advanced CSS tips." 
      },
      { 
        id: 5, 
        title: "Why TypeScript is the Future", 
        image: "Assets/Why TypeScript is the Future.jpeg", 
        author: "Chris Wilson", 
        description: "Why devs love TypeScript." 
      },
      { 
        id: 6, 
        title: "Exploring Node.js Performance", 
        image: "Assets/Exploring Node.js Performance.png", // Corrected path
        author: "Robert Brown", 
        description: "Optimize Node.js backend." 
      },  
      { 
        id: 7, 
        title: "Cloud Computing Trends 2025", 
        image: "Assets/Cloud Computing Trends 2025.jpeg", 
        author: "Sophia Miller", 
        description: "Latest cloud computing insights." 
      },
      { 
        id: 8, 
        title: "Introduction to Next.js", 
        image: "Assets/Introduction to Next.js.jpg", // Corrected path
        author: "David Lee", 
        description: "Next.js revolution for React." 
      },
  
      { 
        id: 9, 
        title: "Scaling Databases Effectively", 
        image: "Assets/Scaling Databases Effectively.jpeg", 
        author: "Laura Adams", 
        description: "Best database scaling practices." 
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      {/* Hero Section */}
      <div className="text-center mt-10">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Welcome to the <span className="text-blue-600">Blog Management System</span>
        </h1>
        <p className="text-lg text-gray-700 mt-2">
          Explore blogs, create content, and manage posts easily.
        </p>
        <div className="flex justify-center mt-6 space-x-4">
          <Link
            to="/dashboard"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <Link
            to="/blog/create"
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Write a Blog
          </Link>
        </div>
      </div>

      {/* Blog Section */}
      <div className="container mx-auto mt-12">
        <div className="blog-container">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <img
                src={blog.image}
                alt={blog.title}
                onError={(e) => {
                  e.target.src = "/Assets/default-image.jpeg"; // Fallback image
                }}
              />
              <div className="content">
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
                <p className="author">By {blog.author}</p>
                <Link to={`/blog/${blog.id}`} className="read-more">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;