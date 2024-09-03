const mongoose = require("mongoose");

// connect mongoose

mongoose.connect(
  "mongodb+srv://vikramkrgupta01:QZ4KkoJI7DMiPwjY@cluster0.kolnqwy.mongodb.net/CourseProj"
);

// define schema
const AdminSchema = new mongoose.Schema({
  // schema defination
  name: String,
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  //Schema Defination
  username: String,
  password: String,
  purchesedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageLink: String,
  price: Number,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
