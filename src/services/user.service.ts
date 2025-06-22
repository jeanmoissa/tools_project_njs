import prisma from '../prisma/client';

export function createUser(name: string, email: string) {
  return prisma.user.create({ data: { name, email } });
}

export function getUsers() {
  return prisma.user.findMany();
}

export function getUserById(id: number) {
  return prisma.user.findUnique({ where: { id } });
}

export async function updateUser(id: number, data: { name?: string; email?: string }) {
  return prisma.user.update({
    where: { id }, // <== aqui espera um número válido
    data,
  });
}

export function deleteUser(id: number) {
  return prisma.user.delete({ where: { id } });
}
