import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan'
import connectDB from './config/db.js';
import productsRouter from './routers/products.js'


// Configure env
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const api = process.env.API_URL;

// middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(`${api}/products`, productsRouter)


// database connection
connectDB();


app.listen(PORT, ()=> {
  console.log(`Server is running http://localhost:${PORT}`);
})


