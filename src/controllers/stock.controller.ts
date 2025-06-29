import { Request, Response } from 'express';
import * as stockService from '../services/stock.service';

export async function createStock(req: Request, res: Response) {
  const { toolId, quantity, date_entrance, date_exit } = req.body;
  const stock = await stockService.createStock(toolId, quantity, new Date(date_entrance), new Date(date_exit));
  res.status(201).json(stock);
}
export async function getStocks(_: Request, res: Response) {
  const stocks = await stockService.getStocks();
  res.json(stocks);
}
export async function getStockById(req: Request, res: Response) {
  const id = Number(req.params.id);
  const stock = await stockService.getStockById(id);
  if (!stock) res.status(404).json({ message: 'Stock not found' });
  else res.json(stock);
}
export async function updateStock(req: Request, res: Response) {
  const id = Number(req.params.id);
  const data = req.body;
  if (data.date_entrance) data.date_entrance = new Date(data.date_entrance);
  if (data.date_exit) data.date_exit = new Date(data.date_exit);
  const updated = await stockService.updateStock(id, data);
  res.json(updated);
}
export async function deleteStock(req: Request, res: Response) {
  await stockService.deleteStock(Number(req.params.id));
  res.status(204).send();
}