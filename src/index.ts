import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes'
import categoryRoutes from './routes/category.routes';
import toolRoutes from './routes/tool.routes';
import stockRoutes from './routes/stock.routes';



dotenv.config();
const app = express();
const router = express.Router();

app.use(express.json());
app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/categories', categoryRoutes);
app.use('/tools', toolRoutes);
app.use('/stock', stockRoutes);

export default router;

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
