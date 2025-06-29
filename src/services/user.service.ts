import prisma from '../prisma/client';
import bcrypt from 'bcrypt';

export async function createUser(name: string, email: string, password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
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
