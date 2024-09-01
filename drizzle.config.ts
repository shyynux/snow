import { defineConfig } from "drizzle-kit";
import dotenv from 'dotenv';

dotenv.config();

const connString: string = process.env.NEON_URL ?? '';

if (!connString) {
  throw new Error('NEON_URL environment variable is not defined');
}

export default defineConfig({
  dialect: "postgresql",
  migrations: {
    prefix: 'timestamp',
  },
  dbCredentials: {
    url: connString,
  },
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
});
