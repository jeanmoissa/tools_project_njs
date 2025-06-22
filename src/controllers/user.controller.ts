import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export async function createUser(req: Request, res: Response) {
  const { name, email } = req.body;
  const user = await userService.createUser(name, email);
  res.status(201).json(user);
}

export async function getUsers(req: Request, res: Response) {
  const users = await userService.getUsers();
  res.json(users);
}

export async function getUserById(req: Request, res: Response): Promise<void> {
  const id = Number(req.params.id);
  const user = await userService.getUserById(id);
  if (!user) {
    res.status(404).json({ message: 'User not found' });
  } else {
    res.json(user);
  }
}

export async function updateUser(req: Request, res: Response): Promise<void> {
  const id = Number(req.params.id);
  const { name, email } = req.body;

  try {
    const user = await userService.updateUser(id, name, email);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
}

export async function deleteUser(req: Request, res: Response) {
  await userService.deleteUser(Number(req.params.id));
  res.status(204).send();
}
