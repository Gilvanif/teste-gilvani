import type { Knex } from "knex";
import "dotenv/config";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      port: Number(process.env.DATABASE_PORT || 5432),
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "src/database/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "src/database/seeds",
    },
  },
};

module.exports = config;
