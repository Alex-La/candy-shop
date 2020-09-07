const { DataSource } = require("apollo-datasource");

class ProductsAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  async getProduct({ vendorCode }) {
    return await this.store.FullMode.findAll({
      where: { vendor_code: vendorCode.toString() },
    });
  }

  async getProducts() {
    return await this.store.FullMode.findAll();
  }

  async getProductsByMain({ main }) {
    return await this.store.FullMode.findAll({
      where: { main_product_category: main, can_buy: "1" },
    });
  }

  async getProductsBySubsection({ subsection }) {
    return await this.store.FullMode.findAll({
      where: { subsection_product_category: subsection, can_buy: "1" },
    });
  }

  async getProductsByMainAndSubsection({ main, subsection }) {
    return await this.store.FullMode.findAll({
      where: {
        main_product_category: main,
        subsection_product_category: subsection,
        can_buy: "1",
      },
    });
  }

  async getProductsByManufacturer({ manufacturer }) {
    return await this.store.FullMode.findAll({
      where: { manufacturer, can_buy: "1" },
    });
  }

  async getProductsByManufacturerAndMain({ manufacturer, main }) {
    return await this.store.FullMode.findAll({
      where: { main_product_category: main, manufacturer, can_buy: "1" },
    });
  }

  async searchProducts({ searchName, category }) {
    if (category) {
      switch (category) {
        case "Категория":
          return await this.store.FullMode.findAll({
            where: { main_product_category: searchName },
          });
        case "Подкатегория":
          return await this.store.FullMode.findAll({
            where: { subsection_product_category: searchName },
          });
        case "Производитель":
          return await this.store.FullMode.findAll({
            where: { manufacturer: searchName },
          });
      }
    } else {
      if (searchName.length !== 0) {
        return await this.store.FullMode.findAll({
          where: { name: searchName, can_buy: "1" },
        });
      } else {
        return await this.store.FullMode.findAll();
      }
    }
  }
}

module.exports = ProductsAPI;
