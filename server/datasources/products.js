const { DataSource } = require("apollo-datasource");

class ProductsAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  async setPriority({ value, vendor_code }) {
    const update = await this.store.FullMode.update(
      { priority: value },
      { where: { vendor_code } }
    );

    if (update) return `Updated with value ${value}`;
    return "Error";
  }

  async getProduct({ vendorCode }) {
    return await this.store.FullMode.findAll({
      where: { vendor_code: vendorCode.toString() },
    });
  }

  async getProductsByAid({ aids }) {
    return await this.store.FullMode.findAll({
      where: { aid: aids }
    });
  }

  async getProducts() {
    return await this.store.FullMode.findAll({ where: { can_buy: "1" } });
  }

  async getProductsToOrder({ vendorCode, color, size }) {

    if (color && size) {
      return await this.store.FullMode.findOne({ where: { vendor_code: vendorCode, color, size } });
    }

    if (color && !size) {
      return await this.store.FullMode.findOne({ where: { vendor_code: vendorCode, color } });
    }

    if (!color && size) {
      return await this.store.FullMode.findOne({ where: { vendor_code: vendorCode, size } });
    }

    return await this.store.FullMode.findOne({ where: { vendor_code: vendorCode } });
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

  async getProductsByManufacturer({ manufacturers }) {
    return await this.store.FullMode.findAll({
      where: { manufacturer: manufacturers, can_buy: "1" },
    });
  }

  async getProductsByManufacturerAndMain({ manufacturers, main }) {
    return await this.store.FullMode.findAll({
      where: {
        main_product_category: main,
        manufacturer: manufacturers,
        can_buy: "1",
      },
    });
  }

  async searchProducts({ searchName, category }) {
    if (category) {
      switch (category) {
        case "Категория":
          return await this.store.FullMode.findAll({
            where: { main_product_category: searchName, can_buy: "1" },
          });
        case "Подкатегория":
          return await this.store.FullMode.findAll({
            where: { subsection_product_category: searchName, can_buy: "1" },
          });
        case "Производитель":
          return await this.store.FullMode.findAll({
            where: { manufacturer: searchName, can_buy: "1" },
          });
      }
    } else {
      if (searchName.length !== 0) {
        const result = await this.store.FullMode.findAll({
          where: { name: searchName, can_buy: "1" },
        });
        if (result.length === 0) {
          const data = await this.store.FullMode.findAll({
            where: { can_buy: "1" },
          });

          const filteredData = data.filter((el) =>
            el.name.toLowerCase().includes(searchName.toLowerCase())
          );
          return filteredData;
        }
        return result;
      } else {
        return await this.store.FullMode.findAll({
          limit: 1000,
          where: { can_buy: "1" },
        });
      }
    }
  }
}

module.exports = ProductsAPI;
