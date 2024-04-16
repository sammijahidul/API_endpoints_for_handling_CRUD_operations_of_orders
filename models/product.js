import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  image: String,
  stock: {
    type: Number,
    required: true
  }
})

export default mongoose.model('Product', productSchema);