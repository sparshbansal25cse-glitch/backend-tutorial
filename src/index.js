import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import userRoutes from './routes/user.routes.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));