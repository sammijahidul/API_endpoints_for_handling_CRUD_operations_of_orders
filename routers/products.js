import express from 'express'
import Product from '../models/product.js'

const router = express.Router();

// All Products Routes

router.get(`/`, async (req, res) => {
  const AllProducts = await Product.find()
  if(!AllProducts) {
    return res.status(500).json({
      success: false
    })
  }
  return res.status(200).json({
    success: true,
    data: AllProducts
  })
});

router.post(`/create`, async (req, res) => {
  const newProduct = await new Product
  res.send(newProduct)
})

export default router;
