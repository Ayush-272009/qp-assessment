import { Request, Response } from "express";
import Grocery from "../models/grocery.model";
import mongoose from "mongoose";
/**
 * Add a new grocery item
 */
export const addGrocery = async (req: Request, res: Response) => {
  try {
    const { name, price, stock } = req.body;
    const grocery = await Grocery.create({ name, price, stock });
    res.status(201).json(grocery);
  } catch (err) {
    res.status(500).json({ error: "Error adding grocery item" });
  }
};

/**
 * View all grocery items
 */
export const viewGroceries = async (_: Request, res: Response) => {
  try {
    const groceries = await Grocery.find();
    res.status(200).json(groceries);
  } catch (err) {
    res.status(500).json({ error: "Error fetching groceries" });
  }
};

/**
 * Update a grocery item
 */
export const updateGrocery = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params; // Grocery ID from the URL
    const { name, price, stock } = req.body;

    // Validate the ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: "Invalid grocery ID" });
      return;
    }

    // Validate request body
    if (!name || typeof price !== "number" || typeof stock !== "number") {
      res.status(400).json({ error: "Invalid input data" });
      return;
    }

    // Update the grocery item
    const updatedGrocery = await Grocery.findByIdAndUpdate(
      id,
      { name, price, stock },
      { new: true, runValidators: true } // Returns the updated document
    );

    // Check if the grocery item exists
    if (!updatedGrocery) {
      res.status(404).json({ error: "Grocery item not found" });
      return;
    }

    // Respond with the updated grocery item
    res.status(200).json(updatedGrocery);
  } catch (err) {
    console.error("Error updating grocery item:", err); // Log the error for debugging
    res.status(500).json({ error: "Error updating grocery item" });
  }
};

/**
 * Remove a grocery item
 */
export const removeGrocery = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params; // Grocery ID from the URL

    // Validate the ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: "Invalid grocery ID" });
      return;
    }

    // Attempt to delete the grocery item
    const deletedGrocery = await Grocery.findByIdAndDelete(id);

    // Check if the grocery item exists
    if (!deletedGrocery) {
      res.status(404).json({ error: "Grocery item not found" });
      return;
    }

    // Respond with success message
    res
      .status(200)
      .json({
        message: "Grocery item removed successfully",
        data: deletedGrocery,
      });
  } catch (err) {
    console.error("Error removing grocery item:", err); // Log the error for debugging
    res.status(500).json({ error: "Error removing grocery item" });
  }
};

/**
 * Manage inventory (update stock)
 */
export const manageInventory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params; // Grocery ID from the URL
    const { stock } = req.body; // Updated stock value

    // Validate the ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: "Invalid grocery ID" });
      return;
    }

    // Validate the stock value
    if (typeof stock !== "number" || stock < 0) {
      res
        .status(400)
        .json({
          error: "Invalid stock value. Stock must be a non-negative number.",
        });
      return;
    }

    // Update the grocery item's inventory
    const updatedInventory = await Grocery.findByIdAndUpdate(
      id,
      { stock },
      { new: true, runValidators: true } // Ensures the updated document is returned and validates the update
    );

    // Check if the grocery item exists
    if (!updatedInventory) {
      res.status(404).json({ error: "Grocery item not found" });
      return;
    }

    // Respond with the updated inventory
    res.status(200).json({
      message: "Inventory updated successfully",
      data: updatedInventory,
    });
  } catch (err) {
    console.error("Error updating inventory:", err); // Log the error for debugging
    res.status(500).json({ error: "Error updating inventory" });
  }
};
