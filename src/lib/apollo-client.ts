import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const GRAPHQL_ENDPOINT = "https://graphql-pokemon2.vercel.app";

export function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({ uri: GRAPHQL_ENDPOINT }),
    cache: new InMemoryCache({
      typePolicies: {
        Pokemon: {
          keyFields: ["id"],
        },
        Attack: {
          keyFields: false,
        },
      },
    }),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-first",
      },
      query: {
        fetchPolicy: "cache-first",
      },
    },
  });
}

let clientInstance: ApolloClient<unknown> | null = null;

export function getApolloClient() {
  if (!clientInstance) {
    clientInstance = createApolloClient();
  }
  return clientInstance;
}
