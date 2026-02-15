"use client";

import { ApolloProvider } from "@apollo/client";
import { getApolloClient } from "./apollo-client";

export default function ApolloWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = getApolloClient();

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
