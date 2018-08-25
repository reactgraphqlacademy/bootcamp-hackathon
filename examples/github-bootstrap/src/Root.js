import React from "react";
import App from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: "bearer db3dcfac6b6795ac85bb9340cbf80361e9dd50cd"
  }
});

function Root() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}

export default Root;
