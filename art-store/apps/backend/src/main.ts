import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const JSONServerAPI = require("./datasources/json-server-api");

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;

      return {
        dataSources: {
          jsonServerAPI: new JSONServerAPI({ cache }),
        },
      };
    },
  });
  console.log(`
    🚀  Server is running
    📭  Query at ${url}
  `);
}

 startApolloServer();



