import prisma from '../prisma/client';

export const createTool = (name: string, value: number, categoryId: number) =>
  prisma.tool.create({ data: { name, value, categoryId } });
export const getTools = () => prisma.tool.findMany({ include: { category: true } });
export const getToolById = (id: number) =>
  prisma.tool.findUnique({ where: { id }, include: { category: true } });
export const updateTool = (id: number, data: { name?: string; value?: number; categoryId?: number }) =>
  prisma.tool.update({ where: { id }, data });
export const deleteTool = (id: number) => prisma.tool.delete({ where: { id } });