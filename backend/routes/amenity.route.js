import express from "express";
const router = express.Router();

import Amenity from "../models/schemas/Amenity.schema.js";

router.get('/', async (req, res) => {
    try {
        const amenities = await Amenity.find();

        if (!amenities || amenities.length === 0) {
            return res.status(200).json([]);
        }

        res.status(200).json(amenities);
    } catch (error) {
        console.error('Error fetching amenities:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;