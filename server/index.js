import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

mongoose
    .connect(
        'mongodb+srv://lankapura:lankapura@cluster0.uqmkz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.log(error);
    });

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000,() =>{
    console.log(`Server running on port 3000`);
});
