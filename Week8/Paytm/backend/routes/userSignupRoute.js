const express = require("express");
const UserModel = require("../schema/userSchema");
const { validateUserSignupSchema } = require("../validation/userVailidateSchema");
const router = express.Router();

router.post("/", validateUserSignupSchema, async (req, res) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.status(201).json({ message: "User signed up successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
