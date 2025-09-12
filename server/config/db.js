// config/db.js
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'db_rumahku',
  password: 'qwerty123',
  port: 5432
});

export default pool; // ✅ default export
