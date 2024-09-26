const express = require("express");
const UserModel = require("../schema/userSchema");
const { validateUpdateUserSchema } = require("../validation/userVailidateSchema");
const authenticateToken = require("../middleware/authMiddleware");
const router = express.Router();

router.put("/:id", authenticateToken, validateUpdateUserSchema, async (req, res) => {
  const { id } = req.params;

  try {
    const updateUser = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updateUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully", updateUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
