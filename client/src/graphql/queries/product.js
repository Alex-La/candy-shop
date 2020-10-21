import { gql } from "apollo-boost";

const PRODUCT_QUERY = gql`
  query product($vendorCode: Int!) {
    product(vendorCode: $vendorCode) {
      refetch_require
      product {
        sale
        name
        vendor_code
        aid
        shipment_time
        in_stock
        description
        price_retail
        size
        color
        package
        material
        manufacturer
        gross_weight
        batteries
        photo_small
        photos
      }
    }
  }
`;

export default PRODUCT_QUERY;
