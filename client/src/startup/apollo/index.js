import ApolloClient, { InMemoryCache } from "apollo-boost";

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: "/graphql",
  request: (operation) => {
    const token = localStorage.getItem("token");
    operation.setContext({
      headers: {
        authorization: token ? token : "",
      },
    });
  },
});

export default client;
