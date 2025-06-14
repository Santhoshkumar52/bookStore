import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config()

const port=process.env.PORT
const dbURI=process.env.MONGOURI

app.get('/', (req, res) => {
  return res.status(234).send('Server Running Successfully');
});

app.use('/books', booksRoute);

mongoose
  .connect(dbURI)
  .then(() => {
    console.log('App connected to database');
    app.listen(port, () => {
      console.log(`App connected in http://localhost:${port}/`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
