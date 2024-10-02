const express = require("express");
const router = express.Router();

// Example route to check if the API is working
router.get("/", (req, res) => {
  res.send("API is working");
});

module.exports = router;
