import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import appointmentRoutes from './routes/appointment.route.js';
import ourtreatmentRoutes from './routes/ourtreatment.route.js'; // Ensure this path is correct

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/appointments', appointmentRoutes);
app.use('/api/ourtreatments', ourtreatmentRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});