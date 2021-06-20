import Account from "../models/account";
import client from "./client";

export default class AccountRepository {
  static async create(account: Account): Promise<Account> {
    const query = "INSERT INTO accounts (title) VALUES ($1) RETURNING *";
    const values = [account.title];
    const result = await client.query(query, values);
    return { ...account, id: result.rows[0].id };
  }

  static async findById(id: number): Promise<Account> {
    const query = "SELECT id, title FROM accounts WHERE id = $1";
    const values = [id];
    const result = await client.query(query, values);
    return { title: result.rows[0].title, id: result.rows[0].id };
  }

  static async findAll(): Promise<Account[]> {
    const query = "SELECT id, title FROM accounts";
    const result = await client.query(query);
    return result.rows;
  }

  static async update(account: Account): Promise<Account> {
    const query = "UPDATE accounts SET title=$1 WHERE id=$2 RETURNING *";
    const values = [account.title, account.id];
    const result = await client.query(query, values);
    return result.rows[0];
  }

  static async delete(account: Account): Promise<Account> {
    const query = "DELETE FROM accounts WHERE id=$1";
    const values = [account.id];
    const result = await client.query(query, values);
    return resul;
  }

  constructor() {}
}
