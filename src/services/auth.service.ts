import prisma from '../prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { sendResetEmail } from '../utils/email';

const JWT_SECRET = process.env.JWT_SECRET || 'defaultsecret';

export async function login(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('User not found');

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) throw new Error('Invalid credentials');

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1d' });
  return { token };
}

export async function forgotPassword(email: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('User not found');

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '15m' });
  await sendResetEmail(email, token);
  return { message: 'Reset email sent' };
}

export async function resetPassword(token: string, newPassword: string) {
  try {
    const payload = jwt.verify(token, JWT_SECRET) as { userId: number };
    const hashed = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { id: payload.userId },
      data: { password: hashed },
    });

    return { message: 'Password updated successfully' };
  } catch (err) {
    throw new Error('Invalid or expired token');
  }
}
