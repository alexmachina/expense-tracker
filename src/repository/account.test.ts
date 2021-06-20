import Account from "../models/account";
import AccountRepository from "./account";
import client from "./client";

describe("Account Repository", () => {
  test("It creates an account", async () => {
    const account = new Account({ title: "Alex Account" });

    const createdAccount = await AccountRepository.create(account);
    console.log("b");
    expect(createdAccount).toEqual({ id: 1, title: "Alex Account" });
  });
});
