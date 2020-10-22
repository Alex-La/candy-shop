import { gql } from "apollo-boost";

const DATA_TO_FILTER_QUERY = gql`
  query dataToFilter {
    dataToFilter {
      manufacturers
      colors
      materials
    }
  }
`;

export default DATA_TO_FILTER_QUERY;
