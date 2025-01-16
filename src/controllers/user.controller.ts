import { Request, Response } from "express";
import Grocery from "../models/grocery.model";
import Order from "../models/order.model";

export const viewGroceries = async (_: Request, res: Response) => {
  try {
    const groceries = await Grocery.find();
    res.status(200).json(groceries);
  } catch (err) {
    res.status(500).json({ error: "Error fetching groceries" });
  }
};

// Define Order Item Type
interface OrderItem {
  groceryId: string;
  quantity: number;
}

// Define Request Body Type
interface OrderRequest {
  userId: string;
  items: OrderItem[];
}

export const placeOrder = async (
  req: Request<{}, {}, OrderRequest>,
  res: Response
): Promise<void> => {
  try {
    const { userId, items } = req.body;

    const stockUpdates = items.map(async (item: OrderItem) => {
      const grocery = await Grocery.findById(item.groceryId);
      if (!grocery || grocery.stock < item.quantity) {
        throw new Error(`Insufficient stock for grocery ID: ${item.groceryId}`);
      }
      grocery.stock -= item.quantity;
      await grocery.save();
      return grocery.price * item.quantity;
    });

    const totalAmount = (await Promise.all(stockUpdates)).reduce(
      (a, b) => a + b,
      0
    );

    const order = await Order.create({ userId, items, totalAmount });
    res.status(201).json(order);
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Error placing order" });
  }
};
