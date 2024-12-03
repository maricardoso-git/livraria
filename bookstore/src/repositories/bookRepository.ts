import { Pool } from "pg";
import pool from "../config/database";
import { Book } from "../models/bookModel";

export class BookRepository {
  private pool: Pool = pool;

  async getAllBooks(): Promise<Book[]> {
    const { rows } = await this.pool.query("SELECT * FROM books");
    return rows;
  }

  async getBookById(id: number): Promise<Book | null> {
    const { rows } = await this.pool.query(
      "SELECT * FROM books WHERE id = $1",
      [id],
    );
    return rows[0] || null;
  }

  async addBook(
    title: string,
    subtitle: string,
    image: string,
    price: number,
  ): Promise<Book> {
    const query =
      "INSERT INTO books (title, subtitle, image, price) VALUES ($1, $2, $3, $4) RETURNING *";
    const { rows } = await this.pool.query(query, [
      title,
      subtitle,
      image,
      price,
    ]);
    return rows[0];
  }

  async updateBook(
    id: number,
    title: string,
    subtitle: string,
    image: string,
    price: number,
  ): Promise<Book | null> {
    const query =
      "UPDATE books SET title = $1, subtitle = $2, image = $3, price = $4 WHERE id = $5 RETURNING *";
    const { rows } = await this.pool.query(query, [
      title,
      subtitle,
      image,
      price,
      id,
    ]);
    return rows[0] || null;
  }

  async deleteBook(id: number): Promise<void> {
    await this.pool.query("DELETE FROM books WHERE id = $1", [id]);
  }
}
