import { gql, ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

export const LOCATIONS_PAGE = gql`
  query($page: Int) {
    locations(page: $page) {
      info {
        pages
        next
      }
      results {
        name
        type
      }
    }
  }
`;
