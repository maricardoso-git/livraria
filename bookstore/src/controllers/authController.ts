import { Request, Response } from "express";
import { AuthService } from "../services/authService";

const authService = new AuthService();

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const user = await authService.registerUser(name, email, password);
    res.status(201).json(user);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: "Erro desconhecido" });
    }
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await authService.loginUser(email, password);
    res.status(200).json(user);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(401).json({ error: err.message });
    } else {
      res.status(401).json({ error: "Erro desconhecido" });
    }
  }
};
