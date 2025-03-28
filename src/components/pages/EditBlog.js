import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    // Fetch the existing blog post data (Replace with API call)
    const fetchBlog = async () => {
      const blogData = {
        id,
        title: "Sample Blog Post",
        content: "This is a sample content for editing. Replace with API data.",
      };
      setTitle(blogData.title);
      setContent(blogData.content);
    };
    fetchBlog();
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    // Replace with API call to update blog post
    console.log("Blog Updated:", { id, title, content });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Edit Blog</h1>
      <form onSubmit={handleUpdate} className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <label className="block mb-4">
          <span className="text-gray-700 font-semibold">Title:</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mt-1 border rounded"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700 font-semibold">Content:</span>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 mt-1 border rounded h-40"
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
