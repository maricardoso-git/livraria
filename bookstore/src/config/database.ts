import { Pool } from "pg";

// Substitua pela sua string de conexão do Render.com
const connectionString =
  "postgresql://postgres:flToTcJRqHcLURIRTJkLcmWpqxxbFQqR@autorack.proxy.rlwy.net:19394/railway";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;
