import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";

function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} />
      <div className="content">
        <h2>{blog.title}</h2>
        <p>{blog.description}</p>
        <p className="author">By {blog.author}</p>
        <Link to={`/blog/${blog.id}`} className="read-more">
          Read More →
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
