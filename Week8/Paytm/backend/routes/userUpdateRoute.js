const express = require("express");
const {
  validateUpdateUserSchema,
} = require("../validation/userVailidateSchema");
const { UpdateUserModal } = require("../schema/userSchema");
const router = express.Router();

router.put("/", validateUpdateUserSchema, async (req, res) => {
  const { id } = req.params; // Get user ID from request parameters

  try {
    const updateUser = await UpdateUserModal.findByIdAndUpdate(id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Validate the update against the schema
    });

    if (!updateUser) {
      res.status(404).json({
        message: "User Not Found to Update ",
      });
    }
    res.status(200).json({
      message: "User Update SuccessFully ",
      updateUser,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports=router;
