import { Request, Response } from 'express';
import * as categoryService from '../services/category.service';

export async function createCategory(req: Request, res: Response) {
  const { type } = req.body;
  const category = await categoryService.createCategory(type);
  res.status(201).json(category);
}
export async function getCategories(_: Request, res: Response) {
  const categories = await categoryService.getCategories();
  res.json(categories);
}
export async function getCategoryById(req: Request, res: Response) {
  const id = Number(req.params.id);
  const category = await categoryService.getCategoryById(id);
  if (!category) res.status(404).json({ message: 'Category not found' });
  else res.json(category);
}
export async function updateCategory(req: Request, res: Response) {
  const id = Number(req.params.id);
  const { type } = req.body;
  const updated = await categoryService.updateCategory(id, type);
  res.json(updated);
}
export async function deleteCategory(req: Request, res: Response) {
  await categoryService.deleteCategory(Number(req.params.id));
  res.status(204).send();
}