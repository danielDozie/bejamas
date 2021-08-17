import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://graphql.fauna.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.FAUNA_CLIENT_SECRET}`
    }
  }
});

const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;


import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const defaultOptions = {
	watchQuery: {
		fetchPolicy: "no-cache",
		errorPolicy: "ignore",
	},
	query: {
		fetchPolicy: "no-cache",
		errorPolicy: "all",
	},
};

const cache = new InMemoryCache({
	resultCaching: false,
});


const link = createHttpLink({
	uri: 'https://graphql.fauna.com/graphql',
      headers: {
        authorization: `Bearer ${process.env.FAUNA_CLIENT_SECRET}` // I tried both FAUNA_ADMIN_KEY and SERVER_KEY, and neither works
      }
})

const client = new ApolloClient({
	connectToDevTools: true,
	link,
	cache,
	defaultOptions
});

export default client;