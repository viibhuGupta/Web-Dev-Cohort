const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization; // Extract Authorization header

  // Check if the Authorization header is present and starts with 'Bearer'
  if (!authHeader || authHeader.startsWith("Bearer")) {
    return res.status(403).json({
      message: "Access denied. No token provided.",
    });
  }

  // Extract the token from the 'Bearer <token>' format
  const token = authHeader.split(" ")[1];

  try {
    // Verify the token using the secret from environment variables
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    // Attach the user information (from the token) to the request
    req.userId = decode.userId;
    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Handle invalid or expired token
    return res.status(500).json({
        message: "Invalid or expired token",
    });
  }
};

module.exports = authenticateToken;
