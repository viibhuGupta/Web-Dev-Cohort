const mongoose = require("mongoose");

const UserSignupSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  userName: String,
  email: String,
  phoneNumber: Number,
  password: String,
});

const UserSigninSchema = mongoose.Schema({
  userName: String,
  password: String,
});

const UpdateUserSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  password: String,
});

const UserSignupModel = mongoose.model("Signup", UserSignupSchema);
const UserSigninModel = mongoose.model("Signin", UserSigninSchema);
const UpdateUserModal = mongoose.model("UpdateUSer", UpdateUserSchema);

module.exports = {
  UserSignupModel,
  UserSigninModel,
  UpdateUserModal,
};
