import mongoose from "mongoose";
import express from "express";
import jwt from "jsonwebtoken";
const jwtPassword = "12345";

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://vikramkrgupta01:QZ4KkoJI7DMiPwjY@cluster0.kolnqwy.mongodb.net/"
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.put("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const userExists = await User.findOne({ email: username });
  if (userExists) {
    res.status(400).json({
      msg: "User Already Exists",
    });
  } else {
    const user = new User({
      name: name,
      email: username,
      password: password,
    });

    user.save();
    res.json({
      msg: "User is Created Sucessfullly",
    });
  }
});

// app.get("/users",function(req,res){

// })

const port = 3000;
app.listen(port,()=>{
  console.log(`Server listen in Port : ${port}}`)
})
