import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import "./Home.css";

// Import images from the Assets folder
import cloudTrends from "../../Assets/Cloud Computing Trends 2025.png";
import cssTricks from "../../Assets/CSS Tricks for Developers.png";
import nodePerformance from "../../Assets/Exploring Node.js Performance.png";
import nextJsIntro from "../../Assets/Introduction to Next.js.png";
import reactHooks from "../../Assets/Mastering React Hooks.png";
import scalingDatabases from "../../Assets/Scaling Databases Effectively.jpeg";
import aiFuture from "../../Assets/The Future of AI in 2025.jpeg";
import jsTips from "../../Assets/Top 10 JavaScript Tips.png";
import typescriptFuture from "../../Assets/Why TypeScript is the Future.jpeg";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs([
      { id: 1, title: "Mastering React Hooks", image: reactHooks, author: "John Doe", description: "Learn React Hooks effectively." },
      { id: 2, title: "The Future of AI in 2025", image: aiFuture, author: "Jane Smith", description: "Explore AI advancements." },
      { id: 3, title: "Top 10 JavaScript Tips", image: jsTips, author: "Mike Johnson", description: "Improve JavaScript skills." },
      { id: 4, title: "CSS Tricks for Developers", image: cssTricks, author: "Emily Davis", description: "Advanced CSS tips." },
      { id: 5, title: "Why TypeScript is the Future", image: typescriptFuture, author: "Chris Wilson", description: "Why devs love TypeScript." },
      { id: 6, title: "Exploring Node.js Performance", image: nodePerformance, author: "Robert Brown", description: "Optimize Node.js backend." },
      { id: 7, title: "Cloud Computing Trends 2025", image: cloudTrends, author: "Sophia Miller", description: "Latest cloud computing insights." },
      { id: 8, title: "Introduction to Next.js", image: nextJsIntro, author: "David Lee", description: "Next.js revolution for React." },
      { id: 9, title: "Scaling Databases Effectively", image: scalingDatabases, author: "Laura Adams", description: "Best database scaling practices." },
    ]);
  }, []);

  return (
    <div className="blog-container">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default Blogs;
