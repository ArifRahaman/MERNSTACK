const jwt = require("jsonwebtoken");
const User = require("../model/userschema");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    console.log("Received token:", token);

    if (!token) {
      throw new Error("No token provided");
    }

    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    console.log("Decoded token:", verifyToken);

    if (!verifyToken || !verifyToken._id) {
      throw new Error("Invalid token structure");
    }

    const rootUser = await User.findById({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("User not found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next(); // Call the next middleware or route handler
  } catch (err) {
    console.error("Authentication error:", err.message);
    res.status(401).send("Unauthorized: No valid token provided");
  }
};

module.exports = authenticate;
