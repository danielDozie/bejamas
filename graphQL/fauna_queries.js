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
		query Products($size: Int) {
			allProducts(_size: $size) {
				data {
					_id
					_ts
					name
					category
					price
					details {
						size
						dimmentions {
							width
							height
						}
						description
						recommendation {
							image {
								src
								alt
							}
						}
					}
					featured
					currency
					dimmentions {
						width
						height
					}
					bestseller
				}
			}
		}
	`;

	return graphQLClient.request(query,{size: 1}).then(({ allProducts: { data } }) => data);
};
