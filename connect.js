const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'bharath',
  password: 'root',
  port: 5432,
});

pool.connect();

module.export={pool:pool};