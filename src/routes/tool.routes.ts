import { Router } from 'express';
import * as toolController from '../controllers/tool.controller';
const router = Router();
router.post('/', toolController.createTool);
router.get('/', toolController.getTools);
router.get('/:id', toolController.getToolById);
router.put('/:id', toolController.updateTool);
router.delete('/:id', toolController.deleteTool);
export default router;