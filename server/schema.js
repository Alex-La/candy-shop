const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
    reviews: [Review!]!
    productReviews(vendorCode: Int!): [ProductReview!]!
    sales: [Product!]!
    main: Main!
    getPromoCode(name: String!): Int
    getPromoCodes: [PromoCode]
    products(
      pageSize: Int
      after: String
      main: [String]
      subsection: String
      orderBy: OrderBy
      priceRange: [String]
      manufacturers: [String]
    ): ProductsConnection!
    product(vendorCode: Int!): ProductConnection!
    productsByAid(aids: [String]!): [Product]!
    manufacturers: [String]!
    mainNames: [String]!
    subsectionNames: [String]!
    names: [String]!
    searchProducts(
      pageSize: Int
      after: String
      name: String
      orderBy: OrderBy
      priceRange: [String]
    ): ProductsConnection!
    productsToOrder(vendorCode: [String]!, color: [String], size: [String]): [ProductsToOrder]!
    getOrdersByEmail(email: String!): Orders!
  }

  type Mutation {
    updateMe(data: UserData): String
    login(data: UserData!): Login
    registration(data: UserData!): String
    review(data: ReviewData!): Review!
    productReview(data: ReviewData!): ProductReview!
    changePassword(email: String!): String!
    createPromoCode(name: String!, percent: Int!): String
    removePromoCode(name: String!): String
    setProductPriority(value: Int, vendor_code: [String]): String
    createOrder(data: OrderData): CreateOrder!
    getOrdersById(id: String): Orders!
  }

  input OrderData {
    order: [String]
    ExtOrderID: String
    ExtOrderPaid: Int
    ExtDeliveryCost: Int
    dsDelivery: String
    dsFio: [String]
    dsMobPhone: String
    dsEmail: String
    dsCity: String
    dsPickUpId: String
    dsPostcode: String
    dsCountry: String
    dsArea: String
    dsStreet: String
    dsHouse: String
    dsFlat: String
    dsDeliveryDate: String
    dsComments: String
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

  type Orders {
    ResultStatus: [String]
    Orders: [OrdersItem]
  }

  type OrdersItem {
    Orders_Item: [OrdersConnection]
  }

  type OrdersConnection {
    orderID: [String]
    ExtDateOfAdded: [String]
    ExtOrderPaid: [String]
    ExtOrderTotal: [String]
    ExtDeliveryCost: [String]
    dsDelivery: [String]
    pickupDate: [String]
    status: [String]
    postData: [PostData]
    OrderItems: [OrderItemsItem] 
  }

  type PostData {
    PostCode: [String]
    PostStatusName: [String]
    TrackingUrl: [String]
  }

  type OrderItemsItem {
    OrderItems_Item: [OrderItemsConnection]
  }

  type OrderItemsConnection {
    aID: [String]
  }

  type CreateOrder {
    ResultStatus: [String]
    ResultStatusMsg: [String]
    timestamp: [String]
    orderID: [String]
    totalSum: [String]
    ExtTotalSum: [String]
    ExtDeliveryCost: [String]
    OrderItems: [String]
    pickupDate: [String]
    ErrorItems: [String]
    messages: [String]
  }

  type ProductsToOrder {
    vendor_code: String!
    aid: String!
    price_retail: String!
  }

  type PromoCode {
    name: String!
    percent: Int!
  }

  type Login {
    message: String
    token: String
    user: User
  }

  type User {
    id: Int
    role: String
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
    manufacturers: [String]!
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
    priority: Int
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
