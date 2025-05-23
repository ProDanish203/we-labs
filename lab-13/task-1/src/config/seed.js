import { Menu } from "../schemas/menu.schema.js";
import { Order } from "../schemas/order.schema.js";

export const seedData = async () => {
  try {
    const menuCount = await Menu.countDocuments();
    if (menuCount > 0) return;

    const menuItems = [
      {
        itemName: "Margherita Pizza",
        category: "pizza",
        price: 12.99,
        isAvailable: true,
        prepTime: 15,
      },
      {
        itemName: "Chocolate Cake",
        category: "dessert",
        price: 8.99,
        isAvailable: true,
        prepTime: 10,
      },
      {
        itemName: "Caesar Salad",
        category: "salad",
        price: 9.99,
        isAvailable: true,
        prepTime: 8,
      },
      {
        itemName: "Grilled Salmon",
        category: "main",
        price: 24.99,
        isAvailable: true,
        prepTime: 25,
      },
      {
        itemName: "Tiramisu",
        category: "dessert",
        price: 7.99,
        isAvailable: true,
        prepTime: 5,
      },
    ];

    const insertedMenus = await Menu.insertMany(menuItems);
    console.log("Menu items inserted:", insertedMenus.length);

    const orders = [
      {
        customerId: "CUST001",
        itemId: insertedMenus[0]._id,
        quantity: 2,
        totalPrice: 25.98,
      },
      {
        customerId: "CUST002",
        itemId: insertedMenus[1]._id,
        quantity: 1,
        totalPrice: 8.99,
      },
      {
        customerId: "CUST003",
        itemId: insertedMenus[3]._id,
        quantity: 1,
        totalPrice: 24.99,
      },
    ];

    const insertedOrders = await Order.insertMany(orders);
    console.log("Orders inserted:", insertedOrders.length);
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};
