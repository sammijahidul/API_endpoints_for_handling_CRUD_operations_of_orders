import express from 'express'
import Product from '../models/product.js'

const router = express.Router();

// Get All Products
router.get(`/`, async (req, res) => {
  try {
    const allProducts = await Product.find();
    if(allProducts.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Data Found'
      });
    }
    res.status(200).json({
      success: true,
      data: allProducts
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Something wrong with the server'
    });
  }
});

// Create new Products
router.post(`/create`, async (req, res) => {
  try {
    const newProduct = new Product({
      name: req.body.name,
      description: req.body.description,
      stock: req.body.stock,
      price: req.body.price
    })

    await newProduct.save()
  
    
    res.status(201).json({
      success: true,
      data: newProduct
    })
    
  } catch (error) {
    console.error(error)
    res.status(500).json|({
      success: false,
    })   
  }
})

export default router;
