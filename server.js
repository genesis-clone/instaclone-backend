import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolver = {
  Query: {
    hello: () => 'worldiii',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolver,
});
server
  .listen()
  .then(() => console.log('server is running on https://localhost:4000/'))
