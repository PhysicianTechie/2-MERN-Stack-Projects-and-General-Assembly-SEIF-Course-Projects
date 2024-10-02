const express = require("express");
const router = express.Router();
const Course = require("./course"); // Assuming the Course model is in the models folder

// Get all courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find(); // Fetch all courses from the database
    res.status(200).json(courses); // Return the courses in JSON format
  } catch (err) {
    res.status(500).json({ message: "Server error" }); // Handle server errors
  }
});

// Get a course by ID
router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id); // Find course by ID
    if (!course) {
      return res.status(404).json({ message: "Course not found" }); // Handle case where course isn't found
    }
    res.status(200).json(course); // Return the course details
  } catch (err) {
    res.status(500).json({ message: "Server error" }); // Handle server errors
  }
});

module.exports = router;
