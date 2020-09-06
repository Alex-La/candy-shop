import { gql } from "apollo-boost";

const NAMES_QUERY = gql`
  query names {
    names
  }
`;

export default NAMES_QUERY;
