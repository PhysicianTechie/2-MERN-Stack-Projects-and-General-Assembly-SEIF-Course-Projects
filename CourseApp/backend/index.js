// Load environment variables
require("dotenv").config();

// Import necessary modules
const express = require("express");
const mongoose = require("mongoose");

// Initialize the Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB connection without deprecated options
const MONGO_URI = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log(err));

// Define the port to run the server on
const PORT = process.env.PORT || 5000;

// Test Route to verify server is running
app.get("/", (req, res) => {
  res.send("Yes, server is running properly, thank you");
});

// Import and use API routes
const apiRoutes = require("./routes/api"); // Ensure this file exists
const courseRoutes = require("./routes/course"); // This is the course routes file

// Use API routes
app.use("/api", apiRoutes);
app.use("/api/courses", courseRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
