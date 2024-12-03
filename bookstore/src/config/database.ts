import { Pool } from "pg";

const connectionString =
  "postgresql://postgres:MproHSeiwOafTYtUafqfWOgvNjTTVbVu@autorack.proxy.rlwy.net:17962/railway";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
