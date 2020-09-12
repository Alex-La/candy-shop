import { gql } from "apollo-boost";

const SEARCH_PRODUCTS_QUERY = gql`
  query searchProducts(
    $name: String
    $pageSize: Int
    $after: String
    $orderBy: OrderBy
    $priceRange: [String]
  ) {
    searchProducts(
      name: $name
      pageSize: $pageSize
      after: $after
      orderBy: $orderBy
      priceRange: $priceRange
    ) {
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
        color
        size
        price_retail
      }
    }
  }
`;

export default SEARCH_PRODUCTS_QUERY;
