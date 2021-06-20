import Account from "../models/account";
import client from "./client";

export default class AccountRepository {
  static async create(account: Account): Promise<Account> {
    const query = "INSERT INTO accounts (title) VALUES ($1) RETURNING *";
    const values = [account.title];
    const result = await client.query(query, values);
    return { ...account, id: result.rows[0].id };
  }

  constructor() {}
}
