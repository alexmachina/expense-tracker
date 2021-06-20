import dotenv from "dotenv";
dotenv.config({
  path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : ".env",
});
import AccountRepository from "./src/repository/account";
import client from "./src/repository/client";

const { ApolloServer, gql } = require("apollo-server");
const typeDefs = gql`
  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  type Account {
    id: ID!
    title: String!
    Entries: [Entry]
  }

  type Entry {
    id: ID!
    date: String
    num: String
    description: String
    amount: String
    account: Account
  }

  type Query {
    accounts: [Account]
    account(id: ID!): Account
  }

  type CreateAccountMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    account: Account
  }

  input UpdateAccountInput {
    id: ID!
    title: String!
  }

  type Mutation {
    createAccount(title: String!): CreateAccountMutationResponse
    updateAccount(input: UpdateAccountInput): CreateAccountMutationResponse
  }

  input AccountInput {
    title: String!
  }
`;

const resolvers = {
  MutationResponse: {
    __resolveType(mutationResponse, context, info) {
      return null;
    },
  },
  Query: {
    accounts: async () => {
      const accounts = await AccountRepository.findAll();
      return accounts;
    },
    account: async (root, args) => {
      const account = await AccountRepository.findById(args.id);
      return account;
    },
  },
  Mutation: {
    createAccount: async (account, args) => {
      const newAccount = await AccountRepository.create(args);
      return {
        code: "200",
        success: true,
        message: `Account ${newAccount.title} created`,
        account: newAccount,
      };
    },
    updateAccount: async (account, args) => {
      const updatedAccount = await AccountRepository.update(args.input);
      return {
        code: "200",
        success: true,
        message: `Account ${updatedAccount.id} updated`,
        account: updatedAccount,
      };
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(async ({ url }) => {
  await client.connect();
  console.log(`Server ready at ${url}`);
});
