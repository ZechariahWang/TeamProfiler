import express from "express";
import Product from "../models/team.model.js";
import mongoose from 'mongoose';
import { createProduct, getProducts } from "../controller/team.controller.js";
import { updateProduct } from "../controller/team.controller.js";
import { deleteProduct } from "../controller/team.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;