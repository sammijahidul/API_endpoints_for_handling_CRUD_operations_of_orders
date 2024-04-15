import express from 'express';
import dotenv from 'dotenv';

// Configure env
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const api = process.env.API_URL;




app.get('/', (req, res) => {
  res.send('Hello Api')
})


app.listen(PORT, ()=> {
  console.log(`Server is running http://localhost:${PORT}`);
})


