import express from 'express';
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/users', userRoutes); // ✅ Certo
app.use('/auth', authRoutes); // ✅ Certo

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
