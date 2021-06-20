import dotenv from "dotenv";
dotenv.config();
import Account from "./src/models/account";
import AccountRepository from "./src/repository/account";
import client from "./src/repository/client";
client.connect();

(async function () {
  const myAccount = await AccountRepository.create(
    new Account({ title: "Alex Account" })
  );
  console.log(myAccount);
})();
