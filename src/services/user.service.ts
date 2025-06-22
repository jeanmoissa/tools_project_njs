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

export function updateUser(id: number, name: string, email: string) {
  return prisma.user.update({
    where: { id },
    data: { name, email },
  });
}

export function deleteUser(id: number) {
  return prisma.user.delete({ where: { id } });
}
