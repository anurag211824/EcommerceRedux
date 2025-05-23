import mongoose from "mongoose";
import dotenv from "dotenv"
import products from "./data/Product.js";
import Product from "./models/Product.js";
import User from "./models/User.js";
import Cart from "./models/Cart.js"

dotenv.config();

mongoose.connect(process.env.MONGO_URI)

//Function to seedData
const seedData = async()=>{
    try{
      await Product.deleteMany();
      await User.deleteMany();
      await Cart.deleteMany()
      
    //   Create a default admin user
      const createdUser = await User.create({
        name:"Admin User",
        email:"admin@example.com",
        password:'123456',
        role:"admin"
      })

    // Assign the default user Id to each product
    const userId = createdUser._id;
    
    const sampleProduct = products.map((product)=>{
        return {...product,user:userId}
    })
   
    await Product.insertMany(sampleProduct);
    console.log("Product data seeded successfully");
    process.exit();

    }
    catch(error){
     console.error("Error seeding the data",error);
     process.exit(1)
    }
}
seedData()