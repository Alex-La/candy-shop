const { Sequelize, Model, DataTypes } = require("sequelize");
const config = require("config");
const parseString = require("xml2js").parseString;
const http = require("http");

module.exports.xmlToJson = (url, callback) => {
  http.get(url, (res) => {
    var xml = "";

    res.on("data", (chunk) => {
      xml += chunk;
    });

    res.on("error", (e) => {
      callback(e, null);
    });

    res.on("timeout", (e) => {
      callback(e, null);
    });

    res.on("end", () => {
      parseString(xml, (_, result) => {
        callback(null, result);
      });
    });
  });
}

module.exports.getManufacturers = (array) => {
  let a = [];
  array.map(({ manufacturer }) => {
    if (!a.includes(manufacturer)) {
      if (manufacturer.indexOf("�") === -1) {
        a.push(manufacturer);
      }
    }
  });
  return a.sort();
};

module.exports.toUniqueArray = (data) => {
  const seen = new Set();

  return data.filter((el) => {
    const duplicate = seen.has(el.vendor_code);
    seen.add(el.vendor_code);
    el.size = [el.size];
    el.color = [el.color];
    return !duplicate;
  });
};

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

  class Review extends Model { }
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

  class ProductReview extends Model { }
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

  class User extends Model { }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      role: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      sex: DataTypes.STRING,
    },
    { sequelize, modelName: "user" }
  );

  class PromoCode extends Model { }
  PromoCode.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      percent: DataTypes.INTEGER,
    },
    { sequelize, modelName: "promo_code" }
  );

  class Order extends Model { }
  Order.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      order_id: DataTypes.STRING,
      order_items: DataTypes.STRING,
      ext_delivery_cost: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    { sequelize, modelName: "order" }
  );

  class FullMode extends Model { }
  FullMode.init(
    {
      priority: DataTypes.SMALLINT,
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

  sequelize.sync();

  return { Review, ProductReview, User, FullMode, PromoCode, Order };
};
