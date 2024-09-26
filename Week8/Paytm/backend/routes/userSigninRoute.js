const express = require("express");
const UserModel = require("../schema/userSchema");
const { validateUserSigninSchema } = require("../validation/userVailidateSchema");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/", validateUserSigninSchema, async (req, res) => {
  const { userName, password } = req.body;

  try {
    const user = await UserModel.findOne({ userName: new RegExp(`^${userName}$`, "i") });

    if (!user) {
      return res.status(401).json({ message: "User does not exist" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ message: "User signed in successfully!", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
