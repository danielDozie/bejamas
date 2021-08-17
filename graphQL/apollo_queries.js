import {gql} from 'graphql-tag';

export const ALL_PRODUCTS = gql`
query Products($size: Int) {
			allProducts(_size: $size) {
				data {
					_id
					_ts
					name
					category
					price
					featured
					currency
					bestseller
				}
			}
		}# Write your query or mutation here
`;

