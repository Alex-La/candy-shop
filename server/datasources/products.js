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
}

module.exports = ProductsAPI;
