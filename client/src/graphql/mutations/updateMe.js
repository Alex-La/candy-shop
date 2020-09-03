import { gql } from "apollo-boost";

const UPDATE_ME_MUTATION = gql`
  mutation updateMe($data: UserData) {
    updateMe(data: $data)
  }
`;

export default UPDATE_ME_MUTATION;
