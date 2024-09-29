const express = require("express");
const {
  validateUserSigninSchema,
} = require("../validation/userVailidateSchema");
const jwt = require("jsonwebtoken");
// require("dotenv").config();
const {User} = require("../schema/userSchema");
const { JWT_SECRET } = require("../config");
const router = express.Router();

router.post("/signin", async (req, res) => {
  try {
    const validation = validateUserSigninSchema.safeParse(req.body);

    if (!validation.success) {
      console.log("Validation failed:", validation.error.errors);
      return res.status(201).json({
        message: "Incorrect Input",
        errors: validation.error.errors,
      });
    }

    const user = await User.findOne({
      userName: req.body.userName,
      // password: req.body.password,
    });

    if (!user) {
      // console.log("user not found ");

      return res.status(404).json({
        message: "Invalid username or password",
      });
    }

  
    if (user.password !== req.body.password) {
      console.log("password mismatch");
      return res.status(401).json({
        message: "invalid username or password",
      });
    }

    const playLoad = {
      userId: user._id.toString(),
    };


    const token = jwt.sign(playLoad, JWT_SECRET);
    // console.log("Generated Token ", token);

    res.json({
      token: token,
      message: "Sign in Successfully",
    });
  } catch (error) {
    console.error("Signin error:", error);
    res.status(411).json({
      message: "Error while Log in ",
      error: error.message,
    });
  }
});

module.exports = router;
