import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://02jfjxuq.api.sanity.io/v2023-08-01/graphql/production/default',
  cache: new InMemoryCache(),
});

export default client;
