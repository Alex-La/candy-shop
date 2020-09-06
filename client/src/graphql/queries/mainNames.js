import { gql } from "apollo-boost";

const MAIN_NAMES_QUERY = gql`
  query mainNames {
    mainNames
  }
`;

export default MAIN_NAMES_QUERY;
