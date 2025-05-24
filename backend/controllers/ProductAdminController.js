import Product from "../models/Product.js";

const getAllProductsAdmin = async (req, res) => {
  try {
    const products = await Product.find({});
    if (products) {
      res.json(products);
    } else {
      res.status(404).json({ message: "Products not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


export {getAllProductsAdmin}