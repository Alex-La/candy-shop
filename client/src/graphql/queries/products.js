import { gql } from "apollo-boost";

const PRODUCTS_QUERY = gql`
  query products(data: ProductsData!) {
    products(data: $data) {
      cursor
      hasMore
      price_range
      refetch_require
      products {
        vendor_code
        photo_small
        photos
        name
        description
        price_retail
      }
    }
  }
`;

export default PRODUCTS_QUERY;
