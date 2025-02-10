import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
    .connect(
        process.env.MONGODB_URI,)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.log(error);
    });

const app = express();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT,() =>{
    console.log(`Server running on port ${process.env.PORT}`);
});


