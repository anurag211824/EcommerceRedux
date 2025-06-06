import express from "express";
import { loginUser, registerUser, userProfile } from "../controllers/UserController.js";
import {protect} from "../middleware/AuthMiddleware.js";
const router = express.Router();
// @route POST /api/users/register
// @description Register a new user
// @access Public
router.post("/register", registerUser);

// @route POST /api/users/login
// @desciption Authenticate User
// @access PUBLIC
router.post("/login", loginUser);

// @route GET /api/users/profile
// @description Get logged-in user's profile (protected Route)
// @access Private
router.get("/profile",protect,userProfile)




export default router;
