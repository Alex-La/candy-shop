import { gql } from "apollo-boost";

const LOGIN_MUTATION = gql`
  mutation login($data: UserData!) {
    login(data: $data) {
      message
      token
      user {
        id
        email
        name
        surname
      }
    }
  }
`;

export default LOGIN_MUTATION;
