import { gql } from "apollo-boost";

const REMOVE_PROMO_CODE_MUTATION = gql`
  mutation removePromoCode($name: String!) {
    removePromoCode(name: $name)
  }
`;

export default REMOVE_PROMO_CODE_MUTATION;
