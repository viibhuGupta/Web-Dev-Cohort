const express = require("express");
const {
  validateUserSignupSchema,
} = require("../validation/userVailidateSchema");
const { UserSignupModel } = require("../schema/userSchema");
const router = express.Router();

router.post("/", validateUserSignupSchema, async (req, res) => {
  try {
    const user = new UserSignupModel(req.body);
    await user.save();
    res.status(201).json({
      message: "user Signed up  Successfully!!",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;
