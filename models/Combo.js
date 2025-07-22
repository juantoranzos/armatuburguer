import mongoose from 'mongoose';
const ComboSchema = new mongoose.Schema({
    name: String,
    items: [String],
    price: Number,
    calories: Number
})
export default mongoose.models.Combo || mongoose.model("Combo", ComboSchema);