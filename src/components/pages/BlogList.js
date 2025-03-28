import React, { useState } from "react";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [blogs] = useState([
    { id: 1, title: "Mastering React Hooks", image: "/assets/react-hooks.jpeg", author: "John Doe", description: "Master React Hooks for state management." },
    { id: 2, title: "The Future of AI in 2025", image: "/assets/ai-future.jpeg", author: "Jane Smith", description: "Explore AI advancements." },
    { id: 3, title: "Top 10 JavaScript Tips", image: "/assets/javascript-tips.jpeg", author: "Mike Johnson", description: "Improve JavaScript skills." },
    { id: 4, title: "CSS Tricks for Developers", image: "/assets/css-tricks.jpeg", author: "Emily Davis", description: "Advanced CSS tips." },
    { id: 5, title: "Why TypeScript is the Future", image: "/assets/typescript-future.jpeg", author: "Chris Wilson", description: "Why devs love TypeScript." },
    { id: 6, title: "Exploring Node.js Performance", image: "/assets/node-performance.jpeg", author: "Robert Brown", description: "Optimize Node.js backend." },
    { id: 7, title: "Cloud Computing Trends 2025", image: "/assets/cloud-trends.jpeg", author: "Sophia Miller", description: "Latest cloud computing insights." },
    { id: 8, title: "Introduction to Next.js", image: "/assets/nextjs-intro.jpeg", author: "David Lee", description: "Next.js revolution for React." },
    { id: 9, title: "Scaling Databases Effectively", image: "/assets/scaling-databases.jpeg", author: "Laura Adams", description: "Best database scaling practices." },
  ]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Blog List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-lg" />
            <h2 className="text-2xl font-bold mt-2">{blog.title}</h2>
            <p className="text-gray-600">{blog.description}</p>
            <p className="text-sm text-gray-500">By {blog.author}</p>
            <Link to={`/blogs/${blog.id}`} className="text-blue-500 mt-2 block">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
