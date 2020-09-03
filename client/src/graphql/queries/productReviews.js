import { gql } from "apollo-boost";

const PRODUCT_REVIEWS_QUERY = gql`
  query productReviews($vendorCode: Int!) {
    productReviews(vendorCode: $vendorCode) {
      name
      review
      createdAt
    }
  }
`;

export default PRODUCT_REVIEWS_QUERY;
