// miidleware to handle auth
const { User } = require("../db");

function adminMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  User.findOne({
    username: username,
    password: password,
  }).then(function (value) {
    if (value) {
      next();
    } else {
      res.status(403).json({
        msg: "User does't Exists",
      });
    }
  });
}

module.exports = adminMiddleware;
