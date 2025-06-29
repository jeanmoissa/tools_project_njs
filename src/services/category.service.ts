import prisma from '../prisma/client';

export const createCategory = (type: string) => prisma.category.create({ data: { type } });
export const getCategories = () => prisma.category.findMany();
export const getCategoryById = (id: number) => prisma.category.findUnique({ where: { id } });
export const updateCategory = (id: number, type: string) =>
  prisma.category.update({ where: { id }, data: { type } });
export const deleteCategory = (id: number) => prisma.category.delete({ where: { id } });
