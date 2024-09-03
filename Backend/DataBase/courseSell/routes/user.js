const express = require("express");
const router = express.Router();
const { Course } = require("../db");
const userMiddleware = require("../middleware/user");

router.get("/courses", async (req, res) => {
  const response = await Course.find({});

  res.json({
    courses: response,
  });
});

router.post("/courses/:courseID", userMiddleware, (req, res) => {});

router.get("/purchesedCourses", userMiddleware, (req, res) => {});

module.exports = router;
