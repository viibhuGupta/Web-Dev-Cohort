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

// Add this to log the full user object when it's retrieved
UserSchema.post('findOne', function(result) {
  console.log('User retrieved from database:', result);
});

const User = mongoose.model("User", UserSchema);

module.exports = User;