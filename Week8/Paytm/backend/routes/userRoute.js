const express = require("express");
const signupRoute = require("./userSignupRoute");
const signinRoute = require("./userSigninRoute");
const updateUserRoute = require("./userUpdateRoute");

const router = express.Router();

router.use(signupRoute);
router.use(signinRoute);
router.use(updateUserRoute);

module.exports = router;
