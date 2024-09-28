const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const authMiddleware = (req, res, next) => {
  try {
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

    // Verify the token using the secret from environment variables
    const decoded = jwt.verify(token, JWT_SECRET);

    if (!decoded.userId) {
      console.error("Token missing userId:", decoded);
      return res.status(404).json({
        message: "Invalid token Structure",
      });
    }

    req.userId = decoded.userId; // Attach the user information to the request

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Auth Middleware Error:", error);

    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(403).json({
        message: "Invalid token",
      });
    }
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(403).json({
        message: "Token expired",
      });
    }

    return res.status(403).json({
      message: "Authentication failed",
    });
  }
};

module.exports = authMiddleware;
