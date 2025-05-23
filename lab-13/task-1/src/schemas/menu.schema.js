import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
  {
    itemName: { type: String, required: [true, "Item name is required"] },
    category: { type: String, required: [true, "Category is required"] },
    price: { type: Number, required: [true, "Price is required"] },
    isAvailable: { type: Boolean, default: true },
    prepTime: {
      type: Number,
      required: [true, "Preparation time is required"],
    },
  },
  { timestamps: true, versionKey: false }
);

export const Menu = mongoose.models.Menu || mongoose.model("Menu", menuSchema);
