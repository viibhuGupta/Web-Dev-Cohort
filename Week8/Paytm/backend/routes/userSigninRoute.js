const express = require("express");
const {
  validateUserSigninSchema,
} = require("../validation/userVailidateSchema");
const jwt = require("jsonwebtoken");
// require("dotenv").config();
const User = require("../schema/userSchema");
const { JWT_SECRET } = require("../config");
const router = express.Router();

router.post("/signin", async (req, res) => {
  const validation = validateUserSigninSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(201).json({
      message: "Incorrect Input",
      errors : validation.error.errors,
    });
  }

  const user = User.findOne({
    userName: req.body.userName,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET , {expiresIn:"1h"} 
    );

    // const token = jwt.sign({ userId: user._id, iat: Math.floor(Date.now() / 1000) }, JWT_SECRET);

    res.json({
      token: token,
    });
    return;
  }

  res.status(411).json({
    message: "Error while Login ",
  });
});

module.exports = router;
