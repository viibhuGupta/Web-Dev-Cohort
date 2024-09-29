const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { Account } = require("../schema/userSchema");
const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({
    userId: req.userId,
  });
  res.json({
    balance: account.balance,
  });
});

router.post("")


module.exports = router;