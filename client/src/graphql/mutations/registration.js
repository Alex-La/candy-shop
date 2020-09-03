import { gql } from "apollo-boost";

const REGISTRATION_MUTATION = gql`
  mutation registration(data: UserData!) {
    registration(data: $data)
  }
`;

export default REGISTRATION_MUTATION;
