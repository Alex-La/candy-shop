import { gql } from "apollo-boost";

const MANUFACTURERS_QUERY = gql`
  query manufacturers {
    manufacturers
  }
`;

export default MANUFACTURERS_QUERY;
