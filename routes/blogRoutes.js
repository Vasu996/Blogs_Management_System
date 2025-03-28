import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Fetching all blogs...");
});

export default router; // ✅ Ensure default export
