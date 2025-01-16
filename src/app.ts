import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import adminRoutes from "../routes/adminRoutes";
import userRoutes from "../routes/userRoutes";
dotenv.config();
const app = express();

app.use(express.json());

// Routes
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

// Connect to DB and start server
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
