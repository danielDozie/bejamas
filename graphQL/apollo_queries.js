import {gql} from 'graphql-tag';

export const ALL_PRODUCTS = gql`
query {
  products(limit: 6, order_by: {featured: desc}) {
    id
    name
    price
    category
    currency
    featured
    bestseller
    image
  }
}

`;

export const NextList = gql`
query ALL_PRODUCTS($id: Int){
  products(limit: 6, where: {id: {_gt: $id}} order_by: {featured: desc}) {
    id
    name
    price
    category
    currency
    featured
    bestseller
    image
  }
}

`;

export const SORT_BY_PRICE = gql`
query SORT_BY_PRICE{
  products(order_by: {price: asc}) {
    id
    name
    price
    category
    currency
    featured
    bestseller
    image
  }
}
`
