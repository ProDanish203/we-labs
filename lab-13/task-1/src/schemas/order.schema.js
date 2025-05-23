import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customerId: { type: String, required: [true, "Customer id is required"] },
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Menu",
      required: [true, "Item id is required"],
    },
    quantity: { type: Number, required: [true, "Quantity is required"] },
    orderDate: { type: Date, default: Date.now },
    totalPrice: { type: Number, required: [true, "Total price is required"] },
  },
  { timestamps: true, versionKey: false }
);

export const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
