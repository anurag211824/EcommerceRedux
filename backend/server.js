import express from "express"; // Importing the Express framework to create a web server
import cors from "cors"; // Importing CORS middleware to allow cross-origin requests
import dotenv from "dotenv"; // Importing dotenv to load environment variables from a .env file
const app = express(); // Creating an instance of an Express application
import connectDb from "./config/db.js";
import userRoutes from "./routes/UserRoutes.js";
import productRoutes from "./routes/ProductRoutes.js";
import cartRoutes from "./routes/CartRoutes.js";
import checkoutRoutes from "./routes/CheckOutRoutes.js";
app.use(express.json()); // Middleware to parse incoming JSON requests and make the data available in req.body
app.use(cors()); // Middleware to enable Cross-Origin Resource Sharing (CORS), allowing frontend apps from different origins to access the backend
dotenv.config();
const PORT = process.env.PORT || 3000;
connectDb();

app.get("/", (req, res) => {
  res.send("welcome to Rabbit");
});
//API Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);
app.listen(PORT, () => {
  console.log(`Sever is Running on ${PORT}`);
});
