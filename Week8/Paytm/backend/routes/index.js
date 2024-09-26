const express = require("express");
const router = express.Router();


const signupRoute = require("./userSignupRoute");
const signinRoute = require("./userSigninRoute");
const userUpdateRoute = require("./userUpdateRoute");



router.use("/sign-up",signupRoute )
router.use("/sign-in",signinRoute )
router.use("/update-user",userUpdateRoute )

// app.use("/signup", signupRoute);
// app.use("/signin", signinRoute);
// app.use("/updateUser", userUpdateRoute);

module.exports=router;
