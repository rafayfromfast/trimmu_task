import ApolloClient, { InMemoryCache } from "apollo-boost";

const cache = new InMemoryCache({});

const client = new ApolloClient({
  request: (operation) => {
    operation.setContext({
      uri: "https://api.graphql.jobs"
    });
  },
  cache: cache,
});
export default client;