import { gql } from "apollo-boost";

const PRODUCTS_BY_AID_QUERY = gql`
    query productsByAid($aids: [String]!) {
        productsByAid(aids: $aids) {
            photo_small
            name
            description
        }
    }
`;

export default PRODUCTS_BY_AID_QUERY;