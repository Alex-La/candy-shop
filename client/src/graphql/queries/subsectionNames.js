import { gql } from "apollo-boost";

const SUBSECTION_NAMES_QUERY = gql`
  query subsectionNames {
    subsectionNames
  }
`;

export default SUBSECTION_NAMES_QUERY;
