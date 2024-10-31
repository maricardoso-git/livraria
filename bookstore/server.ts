import express from "express";
import authRoutes from "./src/routes/authRoutes";
import bookRoutes from "./src/routes/bookRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Utilizando as rotas de usuários
app.use(authRoutes); // Prefixo para rotas de usuários
app.use(bookRoutes); // Prefixo para rotas de livros

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
