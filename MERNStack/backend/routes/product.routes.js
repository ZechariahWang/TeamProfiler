import express from "express";
import Product from "../models/product.model.js";
import mongoose from 'mongoose';
import { createProduct, getProducts } from "../controller/product.controller.js";
import { updateProduct } from "../controller/product.controller.js";
import { deleteProduct } from "../controller/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;