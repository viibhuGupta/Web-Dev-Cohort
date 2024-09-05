const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course, User } = require("../db");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
// all handle /admin/signup

router.post("/signup", async (req, res) => {
  // signup page
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;

  await Admin.create({
    name,
    username: username,
    password,
  });
  res.json({
    message: "Admin Created Successfully",
  });

  
});

router.post("/signin" , async (req,res)=> {
  const username = req.body.username;
  const password = req.body.password;

  const user = User.find({
    username,
    password
  });
  if (user) {
    const token = jwt.sign({
      username
    }, JWT_SECRET)

    res.json({
      token
    })

  } else{
    res.json({
     msg:"Incorrect Username and password"
    })
  }
})

router.post("/courses", adminMiddleware, async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;

  const newCourse = await Course.create({
    title,
    description: description,
    imageLink,
    price,
  });
  // console.log(newCourse);
  res.json({
    message: "Course Created Successfully",
    courseID: newCourse._id,
  });
});

router.get("/courses", async (req, res) => {
  const response = await Course.find({});

  res.json({
    courses: response,
  });
});

module.exports = router;






// const user = await User.find({
//   name,
//   username,
//   password,
// });
// if (user) {
//   const token = jwt.sign(
//     {
//       username,
//     },
//     JWT_SECRET
//   );

//   res.json({
//     token,
//   });
// } else {
//   res.json({
//     msg: "Incorrect Email and password",
//   });
// }