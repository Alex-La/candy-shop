import { gql } from "apollo-boost";

const PRODUCT_REVIEW_MUTATION = gql`
  mutation productReview($data: ReviewData!) {
    productReview(data: $data) {
      successMessage
    }
  }
`;

export default PRODUCT_REVIEW_MUTATION;
