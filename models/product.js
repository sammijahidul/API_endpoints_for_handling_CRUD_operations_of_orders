import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    
  },
  description: {
    type: String,
    required: true,
    
  },
  image: {
    type: String,
    default: '',
    
  },
  images: [{
    type: String,
  }],
  brand: {
    type: String,
    default: '',
  },
  price: {
    type: Number,
    default: 0,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
    max: 255,
  }
})

export default mongoose.model('Product', productSchema);