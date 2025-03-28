import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import authRoutes from "./routes/authRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Blog API");
});

app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
