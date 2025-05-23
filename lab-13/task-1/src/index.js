import express from "express";
import cors from "cors";
import { config } from "dotenv";
config();
import { seedData } from "./config/seed.js";
import connectDB from "./config/db.js";
import { Menu } from "./schemas/menu.schema.js";
import { Order } from "./schemas/order.schema.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.post("/api/menu", async (req, res) => {
  try {
    const { itemName, category, price, isAvailable, prepTime } = req.body;
    const menuItem = await Menu.create({
      itemName,
      category: category.toLowerCase(),
      price,
      isAvailable,
      prepTime,
    });

    res.status(201).json(menuItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/api/menu/search/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const items = await Menu.find({
      category: category.toLowerCase(),
      price: { $lt: 15 },
    });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.patch("/api/menu/:id/availability", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedItem = await Menu.findByIdAndUpdate(
      id,
      { isAvailable: false },
      { new: true }
    );
    if (!updatedItem)
      return res.status(404).json({ error: "Menu item not found" });

    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete("/api/orders/customer/:customerId", async (req, res) => {
  try {
    const { customerId } = req.params;
    const result = await Order.deleteMany({ customerId });
    if (result.deletedCount === 0)
      return res.status(404).json({ error: "No orders found for customer" });

    res.json({
      message: `${result.deletedCount} orders deleted for customer ${customerId}`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/analysis/slow-prep", async (req, res) => {
  try {
    const slowPrepItems = await Menu.find({ prepTime: { $gt: 20 } });
    res.json(slowPrepItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/analysis/average-order", async (req, res) => {
  try {
    const result = await Order.aggregate([
      {
        $group: {
          _id: null,
          averageOrderPrice: { $avg: "$totalPrice" },
          totalOrders: { $sum: 1 },
        },
      },
    ]);

    const avgPrice = result.length > 0 ? result[0].averageOrderPrice : 0;
    const totalOrders = result.length > 0 ? result[0].totalOrders : 0;

    res.json({
      averageOrderPrice: parseFloat(avgPrice.toFixed(2)),
      totalOrders,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/menu", async (req, res) => {
  try {
    const items = await Menu.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/orders", async (req, res) => {
  try {
    const orders = await Order.find().populate("itemId");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const startServer = async () => {
  try {
    await connectDB();
    await seedData();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
