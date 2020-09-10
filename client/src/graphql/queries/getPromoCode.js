import { gql } from "apollo-boost";

const GET_PROMO_CODE_QUERY = gql`
  query getPromoCode($name: String!) {
    getPromoCode(name: $name)
  }
`;

export default GET_PROMO_CODE_QUERY;
