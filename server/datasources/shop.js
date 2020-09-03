const { DataSource } = require("apollo-datasource");

class ShopAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  async createProductReview({ vendorCode, name, review }) {
    return await this.store.ProductReview.create({
      vendorCode,
      name,
      review,
    });
  }

  async createReview({ name, email, rate, review }) {
    return await this.store.Review.create({
      name,
      email,
      rate,
      review,
    });
  }

  async getReviews() {
    return await this.store.Review.findAll();
  }

  async getProductReviews(vendorCode) {
    return await this.store.ProductReview.findAll({
      where: { vendor_code: vendorCode.toString() },
    });
  }
}

module.exports = ShopAPI;
