import express from "express";
import Product from "../models/product.model.js";
import mongoose from 'mongoose';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});
    } catch (error) {
        console.log("Error in fetching teams: ", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }
}

export const createProduct = async (req, res) => {
    const product = req.body; // user will send this data

    if (!product.name) {
        return res.status(400).json({success:false, message: "Please provide all fields"});
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({success:true, data: newProduct});
    } catch (error) {
        console.log("Error in creating team: ", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }
}

export const updateProduct = async (req, res) => {
    const {id} = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, message: "Invalid team ID"});
    }

    try {
        const updateProduct = await Product.findByIdAndUpdate(id, product, {new:true});
        res.status(200).json({success: true, data: updateProduct});
    } catch (error) {
        res.status(500).json({success: false, message: "Server Error"});
    }
}

export const deleteProduct = async (req, res) => {
    const {id} = req.params;
    console.log("ID: ", id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, message: "Invalid team ID"});
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Team Deleted"});
    } catch (error) {
        console.log("Error in deleting team: ", error.message);
        res.status(404).json({success: false, message: "Server Error"});
    }
}