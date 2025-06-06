import User from "../models/User.js";

const getAllUsers = async (req, res) => {

  console.log(req);
  
  try {
    const users = await User.find({});
    console.log(users);
    
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
const addUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  console.log(req.body);
  
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "user already exits" });
    user = await User({
      name,
      email,
      password,
      role: role || "customer",
    });
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id); // Add 'await' here
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.role = req.body.role || user.role;

    const updatedUser = await user.save();

    res.json({ message: "User updated successfully", updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" }); 
  }
};

const deleteUser = async(req,res) =>{
  try{
   const user = await User.findById(req.params.id)
   if(user){
    await user.deleteOne()
    res.json({message:"User deleted"})
   }
   else{
    res.status(404).json({message:"User not found"})
   }
  }
  catch(error){
    console.error(error)
    res.status(500).json({message:"Server Error"})
  }
}
export { getAllUsers, addUser,updateUser,deleteUser };
