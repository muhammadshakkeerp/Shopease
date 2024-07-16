import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  //   uri: "https://ShopEase-clone-server-dzyl-git-host-vercel-iamintelligent.vercel.app/graphql",
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});
