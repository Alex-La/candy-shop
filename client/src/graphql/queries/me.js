import { gql } from "apollo-boost";

const ME_QUERY = gql`
  query me {
    me {
      id
      email
      name
      surname
      sex
    }
  }
`;

export default ME_QUERY;
