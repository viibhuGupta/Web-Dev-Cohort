const express = require("express");
const router = express.Router();
const { Course, User } = require("../db");
const userMiddleware = require("../middleware/user");

// this is not protected with middleware
router.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  User.create({
    username,
    password: password,
  });
  res.json({
    msg: "User Created Successfully",
  });
});

router.get("/courses", async (req, res) => {
  const response = await Course.find({});

  res.json({
    courses: response,
  });
});

router.post("/courses/:courseID", userMiddleware, async (req, res) => {
  const courseID = req.params.courseID;
  const username = req.headers.username;

  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: courseID,
      },
    }
  );

  res.json({
    msg: "Purchased Completed",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const user = await User.findOne({
    username: req.headers.username
  });

  console.log(user.purchasedCourses);
  const course = await Course.find({
    _id:{
      "$in":user.purchasedCourses
    }
  })
  res.json({
    course:course
  });
});

module.exports = router;
