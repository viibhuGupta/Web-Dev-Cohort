const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  userName: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  },
  phoneNumber: { type: String, unique: true, required: true, length: 10 },
  password: { type: String, required: true, trim: true },
});

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // ensurig that no user can put the money if the user is not exists in UserSchema
    require: true,
  },

  balance: {
    type: Number,
    require: true,
  },
});

const User = mongoose.model("User", UserSchema);
const Account = mongoose.model("account", accountSchema);

module.exports = { User, Account };
