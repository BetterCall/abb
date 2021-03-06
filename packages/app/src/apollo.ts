import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

import { Platform } from "react-native";

const host = Platform.OS === "ios" ? "http://localhost" : "10.0.2.2";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: `${host}/graphql`
  }),
  cache: new InMemoryCache()
});
