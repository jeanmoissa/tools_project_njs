import { Request, Response } from "express";
import * as toolService from "../services/tool.service";

export async function createTool(req: Request, res: Response) {
  const { name, value, brand, image, description, categoryId } = req.body;
  try {
    const tool = await toolService.createTool(
      name,
      value,
      brand,
      image,
      description,
      categoryId
    );
    res.status(201).json(tool);
  } catch (err: any) {
    res
      .status(400)
      .json({ message: "Erro ao criar ferramenta", error: err.message });
  }
}
export async function getTools(_: Request, res: Response) {
  const tools = await toolService.getTools();
  res.json(tools);
}
export async function getToolById(req: Request, res: Response) {
  const id = Number(req.params.id);
  const tool = await toolService.getToolById(id);
  if (!tool) res.status(404).json({ message: "Tool not found" });
  else res.json(tool);
}
export async function updateTool(req: Request, res: Response) {
  const id = Number(req.params.id);
  const data = req.body;
  const updated = await toolService.updateTool(id, data);
  res.json(updated);
}
export async function deleteTool(req: Request, res: Response) {
  await toolService.deleteTool(Number(req.params.id));
  res.status(204).send();
}
