import express from "express";
import cors from "cors";
import authRoutes from "../src/routes/authRoutes";
import bookRoutes from "../src/routes/bookRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do CORS
app.use(cors({
  origin: "*", // Permite todas as origens (para produção, substitua pelo domínio específico)
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
  allowedHeaders: ["Content-Type", "Authorization"] // Cabeçalhos permitidos
}));

app.use(express.json());

app.use(authRoutes);
app.use(bookRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
