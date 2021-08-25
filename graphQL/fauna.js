import { GraphQLClient, gql } from 'graphql-request';

const CLIENT_SECRET = process.env.FAUNA_ADMIN_KEY || process.env.FAUNA_CLIENT_SECRET;
const FAUNA_GRAPHQL_BASE_URL = 'https://graphql.fauna.com/graphql';

const graphQLClient = new GraphQLClient(FAUNA_GRAPHQL_BASE_URL, {
	headers: {
		authorization: `Bearer ${CLIENT_SECRET}`
	}
});

export const listProducts = () => {
	const query = gql`
		query Products($size: Int, $cursor: String) {
			allProducts(_size: $size, _cursor: $cursor) {
				data {
					_id
					_ts
					name
					category
					price
					featured
					currency
					bestseller
					image {
						src
					}
				}
				before
				after
			}
		}
	`;

	return graphQLClient.request(query,{size: 6, cursor: $cursor}).then(({ allProducts: { data } }) => data);
};
