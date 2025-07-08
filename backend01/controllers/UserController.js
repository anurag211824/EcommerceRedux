import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Registration Logic
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    //Registration
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    user = new User({ name, email, password });
    await user.save();
    // Create JWT payload
    const payload = { user: { id: user._id, role: user.role } };
    // Sign and return the token along with user data
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;

        // Send the user and token in response
        res.status(201).json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
};
// Login logic
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find the user by email
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });
    const isMatch = await user.matchPassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid Credentials" });

    // Create JWT payload
    const payload = { user: { id: user._id, role: user.role } };
    // Sign and return the token along with user data
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;

        // Send the user and token in response
        res.json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

// User Profile Logic
const userProfile = async (req, res) => {
  console.log("Hiii")
  // console.log(req.user.id);
  res.json(req.user);
};

export { registerUser, loginUser, userProfile };
