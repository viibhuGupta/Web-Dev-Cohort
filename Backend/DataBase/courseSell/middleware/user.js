// miidleware to handle auth
const { User } = require("../db");

function adminMiddleware(req, res, next) {


  const token = req.headers.authorization;
  const words = token.split(" ");

  const jwtToken = words[1];
  const decodedValue = jwt.verify(jwtToken, secret);

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

//   User.findOne({
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
