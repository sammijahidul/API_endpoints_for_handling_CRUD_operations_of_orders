import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  name: String,
  image: String,
  stock: {
    type: Number,
    required: true
  }
})

export default mongoose.model('Order', orderSchema);