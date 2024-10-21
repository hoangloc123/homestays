import mongoose from "mongoose";

const AccomodationSchema = new mongoose.Schema({
    ownerId: { type: String, required: true },
    name: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    pricePerNight: { type: Number },
    policyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Policy' },
    amenityIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Amenity' }],
    isAvailable: { type: Boolean },
    roomIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }],
    lat: { type: String },
    lng: { type: String },
    images: [{ type: String }],
    description: { type: String, required: true },
    noteAccomodation: { type: String },
});

export default mongoose.model("Accomodation", AccomodationSchema);