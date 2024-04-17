import express from 'express'
import User from '../models/user.js'
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';

const router = express.Router();

// Get All Users
router.get(`/`, async (req, res) => {
  try {
    const allUsers = await User.find();
    if(allUsers.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Users Found'
      });
    }
    res.status(200).json({
      success: true,
      data: allUsers
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong with the server'
    });
  }
});

// Get a User
router.get(`/:id`, async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if(!user) {
      return res.status(404).json({
        success: false,
        message: 'No Users Found'
      });
    }
    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong with the server'
    });
  }
});

// Create a new User
router.post(`/create`, async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
    })
    await newUser.save()

    res.status(201).json({
      success: true,
      data: newUser
    })
    
  } catch (error) {
    console.error(error)
    res.status(500).json|({
      success: false,
    })   
  }
})

// Login user
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email})
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }

    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      res.status(200).json({
        message: 'User Authenticated'
      })
    } else {
      res.status(400).json({
        message: 'Password is wrong'
      })

    }

    // res.status(200).json({
    //   success: true,
    //   user
    // })
    
  } catch (error) {
    console.error(error)
    res.status(500).json|({
      success: false,
    })      
  }
})

export default router;