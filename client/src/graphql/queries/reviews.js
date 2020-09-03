import { gql } from "apollo-boost";

const REVIEWS_QUERY = gql`
  query reviews {
    reviews {
      name
      email
      rate
      review
      createdAt
    }
  }
`;

export default REVIEWS_QUERY;
