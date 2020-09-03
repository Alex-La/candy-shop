import { gql } from "apollo-boost";

const REVIEW_MUTATION = gql`
  mutation review($data: ReviewData!) {
    review(data: $data) {
      successMessage
    }
  }
`;

export default REVIEW_MUTATION;
