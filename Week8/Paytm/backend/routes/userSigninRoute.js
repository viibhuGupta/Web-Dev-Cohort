const express = require("express");
const {
  validateUserSigninSchema,
} = require("../validation/userVailidateSchema");
const { UserSigninModel } = require("../schema/userSchema");
const router = express.Router();

router.post("/", validateUserSigninSchema, async (teq, res) => {
  const { userName, password } = req.body;

  try {
    // find the user by userName
    const user = await UserSigninModel.findOne({ userName });
    if (!user || user.password !== password) {
      return res.status(401).json({
        message: "User Does Not Exists",
      });
    }
    res.status(201).json({
      message: "User Signin sucsessfully!!",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;
