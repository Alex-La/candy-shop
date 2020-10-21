import { gql } from "apollo-boost";

const PRODUCTS_QUERY = gql`
  query products(
    $sale: Boolean
    $pageSize: Int
    $after: String
    $main: [String]
    $subsection: String
    $orderBy: OrderBy
    $priceRange: [String]
    $manufacturers: [String]
  ) {
    products(
      sale: $sale
      pageSize: $pageSize
      after: $after
      main: $main
      subsection: $subsection
      orderBy: $orderBy
      priceRange: $priceRange
      manufacturers: $manufacturers
    ) {
      cursor
      hasMore
      price_range
      refetch_require
      manufacturers
      products {
        vendor_code
        photo_small
        photos
        name
        description
        price_retail
        color
        size
        sale
      }
    }
  }
`;

export default PRODUCTS_QUERY;
