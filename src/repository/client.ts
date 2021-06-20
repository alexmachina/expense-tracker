require("dotenv").config({
  path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : ".env",
});
import { Client } from "pg";

const client = new Client({
  connectionString: process.env.DATABASE_URI,
});

export default client;
