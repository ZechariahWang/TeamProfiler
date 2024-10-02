import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema({
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
    timestamps: true 
});

const Team = mongoose.model('Product', TeamSchema);

export default Team;