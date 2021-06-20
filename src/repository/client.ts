import { Client } from "pg";

const client = new Client({
  connectionString: process.env.DATABASE_URI,
});

export default client;
