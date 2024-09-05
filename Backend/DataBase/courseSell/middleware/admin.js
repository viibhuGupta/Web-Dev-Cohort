// miidleware to handle auth
const { JWT_SECRET } = require("../config");
const { Admin } = require("../db");
const jwt = require("jsonwebtoken");
function adminMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const words = token.split(" ");

  const jwtToken = words[1];
  const decodedValue = jwt.verify(jwtToken, JWT_SECRET);

  if (decodedValue.username) {
    next();
  } else {
    res.status(403).json({
      msg: "You are not Authenticated",
    });
  }
}

module.exports = adminMiddleware;

// const username = req.headers.username;
//   const password = req.headers.password;

//   Admin.findOne({
//     username: username,
//     password: password,
//   }).then(function (value) {
//     if (value) {
//       next();
//     } else {
//       res.status(403).json({
//         msg: "User does't Exists",
//       });
//     }
//   });
