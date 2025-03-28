import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  // Fix image paths to be relative to 'public' directory
  const blogs = [
    { id: 1, title: "Mastering React Hooks", image: "public/Assets/Mastering React Hooks.png", author: "John Doe", description: "Master React Hooks for state management.", content: "Mastering React Hooks is essential for modern React development, enabling functional components to manage state, side effects, and context without relying on class components. Hooks like useState, useEffect, useContext, and useReducer simplify logic, improve reusability, and enhance performance." },
    { id: 2, title: "The Future of AI in 2025", image: "/Assets/The_Future_of_AI_in_2025.jpeg", author: "Jane Smith", description: "Explore AI advancements.", content: "AI is changing the world..." },
    { id: 3, title: "Top 10 JavaScript Tips", image: "/Assets/Top_10_JavaScript_Tips.png", author: "Mike Johnson", description: "Improve JavaScript skills.", content: "JavaScript is powerful..." },
    { id: 4, title: "CSS Tricks for Developers", image: "/Assets/CSS_Tricks_for_Developers.png", author: "Emily Davis", description: "Advanced CSS tips.", content: "Learn advanced CSS techniques..." },
    { id: 5, title: "Why TypeScript is the Future", image: "/Assets/Why_TypeScript_is_the_Future.jpeg", author: "Chris Wilson", description: "Why devs love TypeScript.", content: "TypeScript provides better tooling..." },
    { id: 6, title: "Exploring Node.js Performance", image: "/Assets/Exploring_Nodejs_Performance.png", author: "Robert Brown", description: "Optimize Node.js backend.", content: "Improving Node.js performance..." },
    { id: 7, title: "Cloud Computing Trends 2025", image: "/Assets/Cloud_Computing_Trends_2025.jpeg", author: "Sophia Miller", description: "Latest cloud computing insights.", content: "Cloud is evolving..." },
    { id: 8, title: "Introduction to Next.js", image: "/Assets/Introduction_to_Nextjs.jpeg", author: "David Lee", description: "Next.js revolution for React.", content: "Next.js provides server-side rendering..." },
    { id: 9, title: "Scaling Databases Effectively", image: "/Assets/Scaling_Databases_Effectively.jpeg", author: "Laura Adams", description: "Best database scaling practices.", content: "Scaling databases efficiently is crucial..." },
  ];

  useEffect(() => {
    const selectedBlog = blogs.find((b) => b.id === parseInt(id));
    if (selectedBlog) setBlog(selectedBlog);
  }, [id]);

  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{blog.title}</h1>
        <p className="text-gray-600 text-sm">By {blog.author}</p>
        {/* Fixed image reference */}
        <img src={blog.image} alt={blog.title} className="my-4 rounded-lg w-full max-h-96 object-cover" />
        <p className="text-lg text-gray-700 leading-relaxed">{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
