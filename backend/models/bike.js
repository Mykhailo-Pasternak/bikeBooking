const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bikeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    wheelSize: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Bike = mongoose.model('Bike', bikeSchema);

module.exports = Bike;