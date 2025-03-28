import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import "./CreateBlog.css";

const CreateBlog = ({ addBlog }) => {
  const { token } = useAuth();
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: "",
    image: "",
    author: "",
    description: "",
    content: "",
  });

  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleContentChange = (e) => {
    setBlog({ ...blog, content: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    setError("");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_upload_preset"); // Replace with your Cloudinary preset

    try {
      console.log("Uploading image to Cloudinary...");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload", // Replace YOUR_CLOUD_NAME
        formData
      );
      console.log("Image uploaded successfully:", res.data.secure_url);
      setBlog((prevBlog) => ({ ...prevBlog, image: res.data.secure_url }));
    } catch (err) {
      console.error("Image upload error:", err);
      setError("Failed to upload image. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure image is uploaded before submitting
    if (!blog.image || uploading) {
      return setError("Please wait for the image to finish uploading.");
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      console.log("Sending blog data to the backend...");
      const response = await axios.post("http://localhost:5000/api/blogs", blog, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("Blog created successfully:", response.data);
      addBlog(response.data);
      setSuccess("Blog created successfully!");
      setBlog({ title: "", image: "", author: "", description: "", content: "" });

      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error("Blog creation error:", error);
      setError("Error creating blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-blog-container">
      <h1>Create a New Blog</h1>

      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}

      <form onSubmit={handleSubmit} className="create-blog-form">
        <table className="blog-form-table">
          <tbody>
            <tr>
              <td><label>Title:</label></td>
              <td><input type="text" name="title" value={blog.title} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label>Author:</label></td>
              <td><input type="text" name="author" value={blog.author} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label>Description:</label></td>
              <td><input type="text" name="description" value={blog.description} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label>Upload Image:</label></td>
              <td>
                <input type="file" accept="image/*" onChange={handleImageUpload} disabled={uploading} />
                {uploading && <p>Uploading image...</p>}
                {blog.image && <img src={blog.image} alt="Preview" className="image-preview" />}
              </td>
            </tr>
            <tr>
              <td><label>Content:</label></td>
              <td>
                <textarea
                  name="content"
                  value={blog.content}
                  onChange={handleContentChange}
                  className="text-editor"
                  rows="10"
                  placeholder="Write your blog content here..."
                  required
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>

        <button type="submit" disabled={loading || uploading}>
          {loading ? "Publishing..." : "Publish Blog"}
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
