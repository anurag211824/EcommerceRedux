import jwt from "jsonwebtoken";
import User from "../models/User.js";

// MiddleWare to protect routes
const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded);
      req.user = await User.findById(decoded.user.id).select("-password");
      next();
    } catch (error) {
      console.error("Token verification failed", error);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }
  else{
    res.status(401).json({message:"Not authorized , no token provided"})
  }
};
// Middleware to check if the user is an admin
const adminAuth = (req,res,next) =>{
  if(req.user && req.user.role === "admin"){
    next();
  }
  else{
    res.status(403).json({message:"Not authorized as a admin"})
  }
}
export  {protect,adminAuth};
