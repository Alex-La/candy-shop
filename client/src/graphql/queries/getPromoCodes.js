import { gql } from "apollo-boost";

const GET_PROMO_CODES_QUERY = gql`
  query getPromoCodes {
    getPromoCodes {
      name
      percent
    }
  }
`;

export default GET_PROMO_CODES_QUERY;
