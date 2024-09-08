import pg from 'pg';
const { Pool } = pg;

const config = {
  host: 'localhost',
  user: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432
};

const pool = new Pool(config);

export default pool;
