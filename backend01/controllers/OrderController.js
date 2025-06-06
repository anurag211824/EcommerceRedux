import Order from "../models/Order.js";

const getMyOrders = async (req, res) => {
  try {
    // Fetch orders for the authenticated users
    const orders = await Order.find({ user: req.user.id }).sort({
      createdAt: -1,
    });
    // sort by most recent ones
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
export { getMyOrders,getOrderById };
