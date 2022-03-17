import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

export const Client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: "http://localhost:3333",
    credentials: "same-origin",
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
});
