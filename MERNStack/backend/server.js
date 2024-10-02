import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from "./routes/team.routes.js";
import cors from 'cors'; // Use import for cors since you're using ES modules
import path from "path";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

// Connect to the database before starting the server
connectDB();

// CORS middleware
app.use(cors({
  origin: 'http://localhost:5173',  // Allow requests from your frontend URL
}));

// Middleware to accept JSON data in request body
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  })
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
