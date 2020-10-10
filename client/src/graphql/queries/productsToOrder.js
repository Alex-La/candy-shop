import { gql } from "apollo-boost";

const PRODUCTS_TO_ORDER_QUERY = gql`
    query productsToOrder($vendorCode: [String]!, $color: [String], $size: [String]) {
        productsToOrder(vendorCode: $vendorCode, color: $color, size: $size) {
            vendor_code
            aid
            price_retail
        }
    }
`;

export default PRODUCTS_TO_ORDER_QUERY;