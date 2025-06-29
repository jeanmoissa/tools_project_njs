import prisma from '../prisma/client';

export const createStock = (toolId: number, quantity: number, date_entrance: Date, date_exit: Date) =>
  prisma.stock.create({ data: { toolId, quantity, date_entrance, date_exit } });
export const getStocks = () => prisma.stock.findMany({ include: { tool: true } });
export const getStockById = (id: number) =>
  prisma.stock.findUnique({ where: { id }, include: { tool: true } });
export const updateStock = (
  id: number,
  data: { toolId?: number; quantity?: number; date_entrance?: Date; date_exit?: Date }
) => prisma.stock.update({ where: { id }, data });
export const deleteStock = (id: number) => prisma.stock.delete({ where: { id } });