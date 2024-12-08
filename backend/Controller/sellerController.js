const Seller = require("../Models/seller");
const jwt = require('jsonwebtoken');
const currentDate = new Date();

// Create seller
let createSeller = (req, res) => {
    let { name, email, phone, address } = req.body;

    let seller = new Seller({
        name,
        email,
        phone,
        address
    });

    seller.save().then((seller) => {
        res.status(200).send({ message: "Seller created successfully", seller });
    }).catch((error) => {
        res.status(500).send({ message: "Error creating seller", error });
    });
};

// Update seller
let updateSeller = (req, res) => {
    let sellerId = req.params.id;
    let { name, email, phone, address } = req.body;

    Seller.findByIdAndUpdate(sellerId, { name, email, phone, address }, { new: true })
        .then((updatedSeller) => {
            res.status(200).send({ message: "Seller updated successfully", updatedSeller });
        }).catch((error) => {
        res.status(500).send({ message: "Error updating seller", error });
    });
};

// Get seller details
let getSeller = (req, res) => {
    let sellerId = req.params.id;

    Seller.findById(sellerId)
        .then((seller) => {
            if (!seller) {
                return res.status(404).send({ message: "Seller not found" });
            }
            res.status(200).send({ seller });
        }).catch((error) => {
        res.status(500).send({ message: "Error fetching seller details", error });
    });
};

// Delete seller
let deleteSeller = (req, res) => {
    let sellerId = req.params.id;

    Seller.findByIdAndDelete(sellerId)
        .then(() => {
            res.status(200).send({ message: "Seller deleted successfully" });
        }).catch((error) => {
        res.status(500).send({ message: "Error deleting seller", error });
    });
};

module.exports = { createSeller, updateSeller, getSeller, deleteSeller };
