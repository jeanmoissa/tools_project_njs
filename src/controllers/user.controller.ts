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

  if (isNaN(id)) {
    res.status(400).json({ message: 'Invalid ID' });
    return;
  }

  const { name, email } = req.body;

  const dataToUpdate: { name?: string; email?: string } = {};
  if (name !== undefined) dataToUpdate.name = name;
  if (email !== undefined) dataToUpdate.email = email;

  if (Object.keys(dataToUpdate).length === 0) {
    res.status(400).json({ message: 'No valid fields provided for update' });
    return;
  }

  try {
    const user = await userService.updateUser(id, dataToUpdate);
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ message: 'Error updating user', error: error.message || error });
  }
}

export async function deleteUser(req: Request, res: Response) {
  await userService.deleteUser(Number(req.params.id));
  res.status(204).send();
}
