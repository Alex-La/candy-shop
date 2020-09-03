const { DataSource } = require("apollo-datasource");
const isEmail = require("isemail");

class UserAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  async createUser({ email, password, name, surname }) {
    return await this.store.User.create({ email, password, name, surname });
  }

  async updateUser({ id, email, password, name, surname, sex }) {
    return await this.store.User.update(
      { email, password, name, surname, sex },
      { where: { id } }
    );
  }

  async findUser({ email }) {
    if (!isEmail.validate(email)) return;
    return await this.store.User.findOne({ where: { email } });
  }
}

module.exports = UserAPI;
