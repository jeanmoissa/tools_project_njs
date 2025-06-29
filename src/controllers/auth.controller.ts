import { Request, Response } from 'express';
import * as authService from '../services/auth.service';

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const result = await authService.login(email, password);
    res.json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Erro desconhecido';
    res.status(401).json({ message });
  }
}

export async function forgotPassword(req: Request, res: Response) {
  const { email } = req.body;
  try {
    const result = await authService.forgotPassword(email);
    res.json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Erro desconhecido';
    res.status(400).json({ message });
  }
}

export async function resetPassword(req: Request, res: Response) {
  const { token, newPassword } = req.body;
  try {
    const result = await authService.resetPassword(token, newPassword);
    res.json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Erro desconhecido';
    res.status(400).json({ message });
  }
}
