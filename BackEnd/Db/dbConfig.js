const { Pool } = require('pg');

// Detect if running in production (Render)
const isProduction = process.env.NODE_ENV === "production";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isProduction
    ? { rejectUnauthorized: false } // Required for Render PostgreSQL
    : false, // No SSL for local development
});

module.exports = pool;
