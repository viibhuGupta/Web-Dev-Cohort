const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");


const authMiddleware = (req, res, next) => {

//   const token1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3Mjc0NDk5ODh9.Gs8YJGM1g93wbgKrRJnfHqkBUMp9A9F48UkKxHgxJOg';
// const secretKey = 'vibhuGupta'; // Replace with your actual secret key

// try {
//   const decoded = jwt.verify(token1, secretKey);
//   console.log('Token is valid:', decoded);
// } catch (error) {
//   console.error('Token is invalid:', error.message);
// }


  // Extract Authorization header

  const authHeader = req.headers.authorization; 

  // Check if the Authorization header is present and starts with 'Bearer'
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({
      message: "Access denied. No token provided.",
    });
  }

  // Extract the token from the 'Bearer <token>' format
  const token = authHeader.split(" ")[1];
  console.log("token is ", token)

  try {
    // Verify the token using the secret from environment variables
    const decode = jwt.verify(token, JWT_SECRET);
    console.log("decoded token:", decode);

    const userId = decode.userId
    req.userId = userId; // Attach the user information to the request
   
    // console.log("req.userId:", req.userId);

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(403).json({
      message: "Invalid or expired token",
    });
  }
};

module.exports = authMiddleware;
