const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
    reviews: [Review!]!
    productReviews(vendorCode: Int!): [ProductReview!]!
    sales: [Product!]!
    main: Main!
    products(
      pageSize: Int
      after: String
      main: [String]
      subsection: String
      orderBy: OrderBy
      priceRange: [String]
    ): ProductsConnection!
    product(vendorCode: Int!): ProductConnection!
  }

  type Mutation {
    updateMe(data: UserData): String
    login(data: UserData!): Login
    registration(data: UserData!): String
    review(data: ReviewData!): Review!
    productReview(data: ReviewData!): ProductReview!
  }

  input ReviewData {
    vendorCode: Int
    name: String
    email: String
    rate: String
    review: String
  }

  input UserData {
    id: Int
    name: String
    surname: String
    email: String
    password: String
    sex: String
  }

  input ProductsData {
    pageSize: Int
    after: String
    main: [String]
    subsection: String
    orderBy: OrderBy
    priceRange: [String]
  }

  type Login {
    token: String!
    user: User!
  }

  type User {
    id: Int
    email: String
    name: String
    surname: String
    sex: String
  }

  type ProductReview {
    successMessage: String
    name: String
    review: String
    createdAt: Date
  }

  type ProductConnection {
    refetch_require: Boolean!
    product: Product
  }

  type ProductsConnection {
    cursor: String
    hasMore: Boolean!
    price_range: [String]!
    refetch_require: Boolean!
    products: [Product]!
  }

  type Main {
    slider_images: [String]
    top_section_images: [String]
  }

  type Review {
    successMessage: String
    name: String
    email: String
    rate: String
    review: String
    createdAt: Date
  }

  type Product {
    vendor_code: String
    main_product_category: String
    subsection_product_category: String
    name: String
    description: String
    manufacturer: String
    price_retail: String
    price_wholesale: String
    can_buy: String
    in_stock: String
    shipment_time: String
    size: [String]
    color: [String]
    aid: String
    material: String
    batteries: String
    package: String
    gross_weight: String
    photo_small: String
    photos: [String]
  }

  enum OrderBy {
    DEFAULT
    PRICE_ASC
    PRICE_DESC
  }

  scalar Date
`;

module.exports = typeDefs;
