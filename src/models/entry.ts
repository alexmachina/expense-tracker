import Account from "./account";

export default class Entry {
  num: string;
  description: string;
  amount: string;
  account: Account;
  createdAt: Date;

  constructor(
    num: string,
    description: string,
    amount: string,
    account: Account
  ) {
    this.num = num;
    this.description = description;
    this.amount = amount;
    this.account = account;
  }
}
