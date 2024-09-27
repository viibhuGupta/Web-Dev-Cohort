const express = require("express");
const User = require("../schema/userSchema");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const {
  validateUserSignupSchema,
} = require("../validation/userVailidateSchema");
const { JWT_SECRET } = require("../config");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const validation = validateUserSignupSchema.safeParse(req.body);

  if (!validation.success) {
    res.status(411).json({
      message: "Email already taken / Incorrect inputs",
      errors:validation.error.errors,
    });
  }

  // check existing user  before signup
  const existingUser = await User.findOne({
    userName: req.body.userName,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  // create the user in mongodb
  const user = await User.create(req.body);

  const userId = user._id;

  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  res.status(200).json({
    message: "User created successfully",
    token: token,
  });
});

module.exports = router;
