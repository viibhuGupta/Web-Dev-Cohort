const express = require("express");
const {
  validateUpdateUserSchema,
} = require("../validation/userVailidateSchema");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { User } = require("../schema/userSchema");

router.put("/update", authMiddleware, async (req, res) => {
  try {
    // The `updateOne` method is used =>  The first argument should be the filter, and the second should be the update.

    // Not using `$set` operator: Without `$set`, MongoDB might try to replace the entire document instead of updating specific fields.

    //  Not checking `matchedCount`: `nModified` is deprecated. We should check `matchedCount` to ensure a user was found.
    const validation = validateUpdateUserSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(401).json({
        message: "Error while updating information",
        errors: validation.error.errors,
      });
    }

    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(201).json({
        message: "User not found",
      });
    }

    const result = await User.updateOne(
      { _id: req.userId },
      { $set: req.body }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({
        message: "User not found ",
      });
    }

    if (result.modifiedCount === 0) {
      return res.status(404).json({
        // 304 not include response body so 304 => 404
        message: " no changes made",
      });
    }

    res.json({
      message: "User Update Successfully",
    });
  } catch (error) {
    console.error("Error in /User-update route:", error);
    res.status(500).json({
      message: "Error updating user",
      error: error.message,
    });
  }
});

module.exports = router;
