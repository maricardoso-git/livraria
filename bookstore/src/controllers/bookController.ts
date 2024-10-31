// src/controllers/bookController.ts

import { Request, Response } from "express";
import { BookRepository } from "../repositories/bookRepository";
import { validateBookTitle } from "../helpers/bookValidationHelper";

const bookRepository = new BookRepository();

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await bookRepository.getAllBooks();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar livros" });
  }
};

export const addBook = async (req: Request, res: Response) => {
  const { title, author, price } = req.body;

  // Validar título do livro
  if (!validateBookTitle(title)) {
    return res
      .status(400)
      .json({ error: "O título do livro deve ter pelo menos 3 caracteres." });
  }

  try {
    const book = await bookRepository.addBook(title, author, price);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: "Erro ao adicionar livro" });
  }
};
