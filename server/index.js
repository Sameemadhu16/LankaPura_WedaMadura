import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Import the routes
const ourtreatmentRoutes = import('./routes/ourtreatmentroute.js');

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


// Routes
app.use('/api/treatments', ourtreatmentRoutes); // Add treatment routes under the "/api/treatments" endpoint



app.listen(process.env.PORT,() =>{
    console.log(`Server running on port ${process.env.PORT}`);
});
