import { Router } from "express";
import {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} from "../controllers/bookController";

const router = Router();

router.get("/books", getAllBooks);
router.get("/books/:id", getBookById);
router.post("/books", addBook);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);

export default router;
