import { Router } from 'express';
import * as stockController from '../controllers/stock.controller';
const router = Router();
router.post('/', stockController.createStock);
router.get('/', stockController.getStocks);
router.get('/:id', stockController.getStockById);
router.put('/:id', stockController.updateStock);
router.delete('/:id', stockController.deleteStock);
export default router;