import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: false
    },
    image: {
        type: String,
        required: false
    },
}, {
    timestamps: true // created at, updated at
});

const Product = mongoose.model('Product', productSchema);

export default Product;