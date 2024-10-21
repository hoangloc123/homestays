import mongoose from "mongoose";

const AmenitySchema = new mongoose.Schema({
    name: { type: String, required: true },
});

export default mongoose.model("Amenity", AmenitySchema);