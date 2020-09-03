const { Sequelize, Model, DataTypes } = require("sequelize");
const config = require("config");

module.exports.paginateResults = ({
  after: cursor,
  pageSize = 12,
  results,
  getCursor = () => null,
}) => {
  if (pageSize < 1) return [];

  if (!cursor) return results.slice(0, pageSize);
  const cursorIndex = results.findIndex((item) => {
    let itemCursor = item.aid ? item.aid : getCursor(item);
    return itemCursor ? cursor === itemCursor : false;
  });

  return cursorIndex >= 0
    ? cursorIndex === results.length - 1
      ? []
      : results.slice(
          cursorIndex + 1,
          Math.min(results.length, cursorIndex + 1 + pageSize)
        )
    : results.slice(0, pageSize);
};

module.exports.resultsFilter = ({ orderBy, results }) => {
  switch (orderBy) {
    case "PRICE_ASC":
      results.sort((a, b) => a.price_retail - b.price_retail);
      break;
    case "PRICE_DESC":
      results.sort((a, b) => b.price_retail - a.price_retail);
      break;
  }
};

module.exports.createStore = () => {
  const sequelize = new Sequelize(config.get("pgString"), {
    logging: false,
  });

  class Review extends Model {}
  Review.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      rate: DataTypes.STRING,
      review: DataTypes.STRING,
    },
    { sequelize, modelName: "review" }
  );

  class ProductReview extends Model {}
  ProductReview.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      vendor_code: DataTypes.STRING,
      name: DataTypes.STRING,
      review: DataTypes.STRING,
    },
    { sequelize, modelName: "product_review" }
  );

  class User extends Model {}
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: { type: DataTypes.STRING, unique: true, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      sex: DataTypes.STRING,
    },
    { sequelize, modelName: "user" }
  );

  class FullMode extends Model {}
  FullMode.init(
    {
      vendor_code: DataTypes.STRING,
      main_product_category: DataTypes.STRING,
      subsection_product_category: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      manufacturer: DataTypes.STRING,
      manufacturer_vendor_code: DataTypes.STRING,
      price_retail: DataTypes.STRING,
      price_wholesale: DataTypes.STRING,
      can_buy: DataTypes.STRING,
      in_stock: DataTypes.STRING,
      shipment_time: DataTypes.STRING,
      size: DataTypes.STRING,
      color: DataTypes.STRING,
      aid: { type: DataTypes.STRING, primaryKey: true },
      material: DataTypes.STRING,
      battaries: DataTypes.STRING,
      package: DataTypes.STRING,
      weight: DataTypes.STRING,
      photo_small: DataTypes.STRING,
      photo_one: DataTypes.STRING,
      photo_two: DataTypes.STRING,
      photo_three: DataTypes.STRING,
      photo_four: DataTypes.STRING,
      photo_five: DataTypes.STRING,
      barcode: DataTypes.STRING,
    },
    { sequelize, modelName: "full_mode", timestamps: false }
  );

  class Supersale extends Model {}
  Supersale.init(
    {
      prod_id: DataTypes.STRING,
      a_id: { type: DataTypes.STRING, primaryKey: true },
      base_retail_price: DataTypes.STRING,
      base_whole_price: DataTypes.STRING,
      whole_supersale_price: DataTypes.STRING,
      stock: DataTypes.STRING,
      time: DataTypes.STRING,
    },
    { sequelize, modelName: "supersale", timestamps: false }
  );

  sequelize.sync();

  return { Review, ProductReview, User, FullMode, Supersale };
};