import { gql } from "apollo-boost";

const CHANGE_PASSWORD_MUTATION = gql`
  mutation changePassword($email: String!) {
    changePassword(email: $email)
  }
`;

export default CHANGE_PASSWORD_MUTATION;
