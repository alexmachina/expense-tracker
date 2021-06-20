const { ApolloServer, gql } = require("apollo-server");
const typeDefs = gql`
  type Account {
    title: String
    Entries: [Entry]
  }

  type Entry {
    date: String
    num: String
    description: String
    amount: String
    account: Account
  }
`;

const resolvers = {
  Query: {
    accounts: () => {},
  },
};
