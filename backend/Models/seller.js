// sellerModel.js
const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    area: { type: String, required: true },
    rating: { type: Number, default: 0 },
    propertiesSold: { type: Number, default: 0 },
    contactInfo: { type: String, required: true }, // could be email or phone
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
});

const Seller = mongoose.model('Seller', sellerSchema);

module.exports = Seller;
