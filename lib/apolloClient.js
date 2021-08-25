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
	resultCaching: true,
});


const link = createHttpLink({
	uri: 'https://mbejamas.hasura.app/v1/graphql',
      headers: {
		'content-type': 'application/json',
		'x-hasura-admin-secret': process.env.HASURA_SECRET,
      }
})

const client = new ApolloClient({
	connectToDevTools: true,
	link,
	cache,
	defaultOptions
});

export default client;