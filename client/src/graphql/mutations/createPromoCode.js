import { gql } from "apollo-boost";

const CREATE_PROMO_CODE_MUTATION = gql`
  mutation createPromoCode($name: String!, $percent: Int!) {
    createPromoCode(name: $name, percent: $percent)
  }
`;

export default CREATE_PROMO_CODE_MUTATION;
