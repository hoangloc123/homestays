import mongoose from "mongoose";

const PolicySchema = new mongoose.Schema({
    checkIn: { type: String, required: true },
    checkOut: { type: String, required: true },
    cancellationPolicy: { type: String },
    additionalPolicy: { type: String },
});

export default mongoose.model("Policy", PolicySchema);