const { DataSource } = require("apollo-datasource");

class ShopAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  async createOrder({ order_id, order_items, ext_delivery_cost, email }) {
    return await this.store.Order.create({
      order_id,
      order_items,
      ext_delivery_cost,
      email,
    });
  }

  async getOrders() {
    return await this.store.Order.findAll();
  }

  async createPromoCode({ name, percent }) {
    return await this.store.PromoCode.create({
      name,
      percent,
    });
  }

  async removePromoCode({ name }) {
    return await this.store.PromoCode.destroy({ where: { name } });
  }

  async getPromoCode({ name }) {
    return await this.store.PromoCode.findOne({
      where: { name },
    });
  }

  async getPromoCodes() {
    return await this.store.PromoCode.findAll();
  }

  async createProductReview({ vendorCode, name, review }) {
    return await this.store.ProductReview.create({
      vendor_code: vendorCode,
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
