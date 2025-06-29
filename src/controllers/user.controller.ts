import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export async function createUser(req: Request, res: Response) {
  const { name, email, password } = req.body;
  const user = await userService.createUser(name, email, password);
  res.status(201).json(user);
}

export async function getUsers(req: Request, res: Response) {
  const users = await userService.getUsers();
  res.json(users);
}

export async function getUserById(req: Request, res: Response) {
  const id = Number(req.params.id);
  const user = await userService.getUserById(id);
  if (!user) {
    res.status(404).json({ message: 'User not found' });
  } else {
    res.json(user);
  }
}

export async function updateUser(req: Request, res: Response) {
  const id = Number(req.params.id);
  const { name, email } = req.body;
  const user = await userService.updateUser(id, { name, email });
  res.json(user);
}

export async function deleteUser(req: Request, res: Response) {
  const id = Number(req.params.id);
  await userService.deleteUser(id);
  res.status(204).send();
}
