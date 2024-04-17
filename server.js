import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan'
import cors from 'cors';
import connectDB from './config/db.js';
import productsRouter from './routers/products.js'
import usersRouter from './routers/users.js'
import ordersRoute from './routers/orders.js'

const app = express();
dotenv.config();
app.use(cors());
app.options('*', cors());

const PORT = process.env.PORT;
const api = process.env.API_URL;

// middleware
app.use(express.json());
app.use(morgan('dev'));


//Routes
app.use(`${api}/products`, productsRouter);
app.use(`${api}/users`, usersRouter);
app.use(`${api}/orders`, ordersRoute);

// database connection
connectDB();

app.listen(PORT, ()=> {
  console.log(`Server is running http://localhost:${PORT}`);
})


