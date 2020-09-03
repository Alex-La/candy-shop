import { gql } from "apollo-boost";

const MAIN_QUERY = gql`
  query main {
    main {
      slider_images
      top_section_images
    }
  }
`;

export default MAIN_QUERY;
