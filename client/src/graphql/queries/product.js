import { gql } from "apollo-boost";

const PRODUCT_QUERY = gql`
  query product($vendorCode: Int!) {
    product(vendorCode: $vendorCode) {
      refetch_require
      product {
        name
        vendor_code
        aID
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
