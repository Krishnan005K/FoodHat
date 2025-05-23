import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

const placeOrder = async (req, res) => {
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
      status: req.body.status || "Food Processing",
      payment: true  // Mark as paid (no Stripe)
    });

    await newOrder.save();

    // Clear user cart
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    res.json({ success: true, message: "Order placed successfully" });
  } catch (error) {
    console.log("Order placing error:", error);
    res.json({ success: false, message: "Error placing order" });
  }
};

export { placeOrder };
