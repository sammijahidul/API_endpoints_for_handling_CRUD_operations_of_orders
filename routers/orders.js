import express from 'express'
import Order from '../models/order.js'

const router = express.Router();

router.get(`/`, async (req, res) => {
  const AllUsers = await Order.find()
  if(!AllOrders) {
    return res.status(500).json({
      success: false
    })
  }
  return res.status(200).json({
    success: true,
    data: AllOrders
  })
});

router.post(`/create`, async (req, res) => {
  const newOrder = await new Order
  res.send(newOrder)
})

export default router;