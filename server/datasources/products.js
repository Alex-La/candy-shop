const { DataSource } = require("apollo-datasource");

const Op = require("sequelize").Op;

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
      where: { aid: aids },
    });
  }

  async getProducts(filter) {
    return await this.store.FullMode.findAll({
      where: {
        can_buy: "1",
        manufacturer:
          filter && filter.manufacturers.length !== 0
            ? filter.manufacturers
            : { [Op.not]: null },
        color:
          filter && filter.colors.length !== 0
            ? filter.colors
            : { [Op.not]: null },
        material:
          filter && filter.materials.length !== 0
            ? filter.materials
            : { [Op.not]: null },
      },
      order: [["priority", "DESC"]],
    });
  }

  async getSaleProducts({ filter }) {
    return await this.store.FullMode.findAll({
      where: {
        sale: { [Op.not]: null },
        can_buy: "1",
        manufacturer:
          filter && filter.manufacturers.length !== 0
            ? filter.manufacturers
            : { [Op.not]: null },
        color:
          filter && filter.colors.length !== 0
            ? filter.colors
            : { [Op.not]: null },
        material:
          filter && filter.materials.length !== 0
            ? filter.materials
            : { [Op.not]: null },
      },
      order: [["priority", "DESC"]],
    });
  }

  async getProductsToOrder({ vendorCode, color, size }) {
    if (color && size) {
      return await this.store.FullMode.findOne({
        where: { vendor_code: vendorCode, color, size },
      });
    }

    if (color && !size) {
      return await this.store.FullMode.findOne({
        where: { vendor_code: vendorCode, color },
      });
    }

    if (!color && size) {
      return await this.store.FullMode.findOne({
        where: { vendor_code: vendorCode, size },
      });
    }

    return await this.store.FullMode.findOne({
      where: { vendor_code: vendorCode },
    });
  }

  async getProductsByMain({ main, filter }) {
    return await this.store.FullMode.findAll({
      where: {
        main_product_category: main,
        can_buy: "1",
        manufacturer:
          filter && filter.manufacturers.length !== 0
            ? filter.manufacturers
            : { [Op.not]: null },
        color:
          filter && filter.colors.length !== 0
            ? filter.colors
            : { [Op.not]: null },
        material:
          filter && filter.materials.length !== 0
            ? filter.materials
            : { [Op.not]: null },
      },
      order: [["priority", "DESC"]],
    });
  }

  async getProductsBySubsection({ subsection, filter }) {
    return await this.store.FullMode.findAll({
      where: {
        subsection_product_category: subsection,
        can_buy: "1",
        manufacturer:
          filter && filter.manufacturers.length !== 0
            ? filter.manufacturers
            : { [Op.not]: null },
        color:
          filter && filter.colors.length !== 0
            ? filter.colors
            : { [Op.not]: null },
        material:
          filter && filter.materials.length !== 0
            ? filter.materials
            : { [Op.not]: null },
      },
      order: [["priority", "DESC"]],
    });
  }

  async getProductsByMainAndSubsection({ main, subsection, filter }) {
    return await this.store.FullMode.findAll({
      where: {
        main_product_category: main,
        subsection_product_category: subsection,
        can_buy: "1",
        manufacturer:
          filter && filter.manufacturers.length !== 0
            ? filter.manufacturers
            : { [Op.not]: null },
        color:
          filter && filter.colors.length !== 0
            ? filter.colors
            : { [Op.not]: null },
        material:
          filter && filter.materials.length !== 0
            ? filter.materials
            : { [Op.not]: null },
      },
      order: [["priority", "DESC"]],
    });
  }

  async getProductsByManufacturer({ manufacturers, filter }) {
    return await this.store.FullMode.findAll({
      where: {
        manufacturer:
          manufacturers[0] === null ? { [Op.not]: null } : manufacturers,
        can_buy: "1",
        color:
          filter && filter.colors.length !== 0
            ? filter.colors
            : { [Op.not]: null },
        material:
          filter && filter.materials.length !== 0
            ? filter.materials
            : { [Op.not]: null },
      },
      order: [["priority", "DESC"]],
    });
  }

  async getProductsByManufacturerAndMain({ manufacturers, main, filter }) {
    return await this.store.FullMode.findAll({
      where: {
        main_product_category: main,
        manufacturer: manufacturers,
        can_buy: "1",
        color:
          filter && filter.colors.length !== 0
            ? filter.colors
            : { [Op.not]: null },
        material:
          filter && filter.materials.length !== 0
            ? filter.materials
            : { [Op.not]: null },
      },
      order: [["priority", "DESC"]],
    });
  }

  async searchProducts({ searchName, category, filter }) {
    if (category) {
      switch (category) {
        case "Категория":
          return await this.store.FullMode.findAll({
            where: {
              main_product_category: searchName,
              can_buy: "1",
              manufacturer:
                filter && filter.manufacturers.length !== 0
                  ? filter.manufacturers
                  : { [Op.not]: null },
              color:
                filter && filter.colors.length !== 0
                  ? filter.colors
                  : { [Op.not]: null },
              material:
                filter && filter.materials.length !== 0
                  ? filter.materials
                  : { [Op.not]: null },
            },
            order: [["priority", "DESC"]],
          });
        case "Подкатегория":
          return await this.store.FullMode.findAll({
            where: {
              subsection_product_category: searchName,
              can_buy: "1",
              manufacturer:
                filter && filter.manufacturers.length !== 0
                  ? filter.manufacturers
                  : { [Op.not]: null },
              color:
                filter && filter.colors.length !== 0
                  ? filter.colors
                  : { [Op.not]: null },
              material:
                filter && filter.materials.length !== 0
                  ? filter.materials
                  : { [Op.not]: null },
            },
            order: [["priority", "DESC"]],
          });
        case "Производитель":
          return await this.store.FullMode.findAll({
            where: {
              manufacturer: searchName,
              can_buy: "1",
              color:
                filter && filter.colors.length !== 0
                  ? filter.colors
                  : { [Op.not]: null },
              material:
                filter && filter.materials.length !== 0
                  ? filter.materials
                  : { [Op.not]: null },
            },
            order: [["priority", "DESC"]],
          });
      }
    } else {
      if (searchName.length !== 0) {
        const result = await this.store.FullMode.findAll({
          where: {
            name: searchName,
            can_buy: "1",
            manufacturer:
              filter && filter.manufacturers.length !== 0
                ? filter.manufacturers
                : { [Op.not]: null },
            color:
              filter && filter.colors.length !== 0
                ? filter.colors
                : { [Op.not]: null },
            material:
              filter && filter.materials.length !== 0
                ? filter.materials
                : { [Op.not]: null },
          },
          order: [["priority", "DESC"]],
        });
        if (result.length === 0) {
          const data = await this.store.FullMode.findAll({
            where: {
              can_buy: "1",
              manufacturer:
                filter && filter.manufacturers.length !== 0
                  ? filter.manufacturers
                  : { [Op.not]: null },
              color:
                filter && filter.colors.length !== 0
                  ? filter.colors
                  : { [Op.not]: null },
              material:
                filter && filter.materials.length !== 0
                  ? filter.materials
                  : { [Op.not]: null },
            },
            order: [["priority", "DESC"]],
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
          where: {
            can_buy: "1",
            manufacturer:
              filter && filter.manufacturers.length !== 0
                ? filter.manufacturers
                : { [Op.not]: null },
            color:
              filter && filter.colors.length !== 0
                ? filter.colors
                : { [Op.not]: null },
            material:
              filter && filter.materials.length !== 0
                ? filter.materials
                : { [Op.not]: null },
          },
          order: [["priority", "DESC"]],
        });
      }
    }
  }
}

module.exports = ProductsAPI;
