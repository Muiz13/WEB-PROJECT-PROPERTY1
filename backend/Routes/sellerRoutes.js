const { createSeller, updateSeller, getSeller, deleteSeller } = require("../Controller/sellerController");
const authenticate = require('../Middlewares/authenticate');
const upload = require("../Middlewares/upload");
const Seller = require("../Models/seller");

const sellerRouter = require("express").Router();

// Add this new route to get all sellers
sellerRouter.get('/', async (req, res) => {
    try {
        const sellers = await Seller.find();
        res.json({ sellers });
    } catch (error) {
        console.error('Error fetching sellers:', error);
        res.status(500).json({ message: error.message });
    }
});

// Your existing routes
sellerRouter.post('/create', authenticate, upload, createSeller);
sellerRouter.patch('/update/:id', authenticate, upload, updateSeller);
sellerRouter.get('/:id', authenticate, getSeller);
sellerRouter.delete('/:id', authenticate, deleteSeller);

// Add this route to your seller routes
sellerRouter.post('/:id/rating', async (req, res) => {
    try {
        const { id } = req.params;
        const { rating: newRating } = req.body;
        
        console.log('Received rating update request:', { id, newRating });
        
        const seller = await Seller.findById(id);
        console.log('Found seller with current rating:', seller.rating);

        if (!seller) {
            return res.status(404).json({ message: 'Seller not found' });
        }

        // Calculate average between existing rating and new rating
        const averageRating = seller.rating ? (seller.rating + newRating) / 2 : newRating;
        // Round to 1 decimal place
        seller.rating = Math.round(averageRating * 10) / 10;
        
        await seller.save();
        console.log('Updated seller with new average rating:', seller.rating);

        res.json({ success: true, rating: seller.rating });
    } catch (error) {
        console.error('Error in rating update:', error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = sellerRouter;
