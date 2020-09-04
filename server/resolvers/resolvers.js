const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");

const { products } = require("./query/products");
const { product } = require("./query/product");
const { updateMe } = require("./mutation/updateMe");

module.exports = {
  Query: {
    me: async (_, __, { user }) => {
      if (!user) return null;
      return user;
    },

    reviews: async (_, __, { dataSources }) => {
      const reviews = await dataSources.shopAPI.getReviews();

      if (!reviews) return [];
      return reviews;
    },

    productReviews: async (_, { vendorCode }, { dataSources }) => {
      const reviews = await dataSources.shopAPI.getProductReviews(vendorCode);

      if (!reviews) return [];
      return reviews;
    },

    main: () => {
      const slider_images = [
        "/static/cbc491ae799e3bf574df3bf5dfec9b44.jpg",
        "/static/1457327064116098221.jpg",
        "/static/0e419338-5af6-4318-a1eb-0cd3d794f0af.jpeg",
      ];
      const top_section_images = [
        "/static/e82216a3dce8f23192ae767d89d4376c.jpg",
        "/static/b605118b0f3a7a8b16495cdb56a214a4.jpg",
        "/static/44f951a606722cd5e560d141929360b7.jpg",
      ];

      return { slider_images, top_section_images };
    },

    product: async (_, { vendorCode }, { dataSources }) =>
      await product(vendorCode, dataSources),

    products: async (_, data, { dataSources }) =>
      await products(data, dataSources),

    manufacturers: async (_, __, { dataSources }) => {
      const data = await dataSources.productsAPI.getProducts();
      const manufacturers = [];
      for (let i in data) {
        if (manufacturers.indexOf(data[i].manufacturer) === -1)
          manufacturers.push(data[i].manufacturer);
      }
      return manufacturers.sort();
    },
  },

  Mutation: {
    updateMe: async (_, { data }, { user, dataSources }) =>
      await updateMe({ data, user, dataSources }),

    login: async (_, { data }, { dataSources }) => {
      const { email, password } = data;

      const user = await dataSources.userAPI.findUser({ email });
      if (!user) return { message: "Такого пользователя не существует!" };

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return { message: "Неверный пароль" };

      const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
        expiresIn: "1h",
      });

      return {
        token,
        user,
      };
    },

    registration: async (_, { data }, { dataSources }) => {
      const { email, password, name, surname } = data;

      if (password.length < 6) return "Слишком короткий пароль!";

      const candidate = await dataSources.userAPI.findUser({ email });

      if (candidate) return "Пользователь уже существует!";

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = await dataSources.userAPI.createUser({
        email,
        password: hashedPassword,
        name,
        surname,
      });

      if (user) return "Пользователь создан";
      else return "Ошибка создания пользователя!";
    },

    review: async (_, { data }, { dataSources }) => {
      const { name, email, rate, review } = data;

      const rev = await dataSources.shopAPI.createReview({
        name,
        email,
        rate,
        review,
      });

      if (!rev)
        return { successMessage: "Что-то пошло не так. Попробуйте снова." };
      return { successMessage: "Отзыв добавлен успешно!" };
    },

    productReview: async (_, { vendorCode, name, review }, { dataSources }) => {
      const rev = await dataSources.shopAPI.createProductReview({
        vendorCode,
        name,
        review,
      });

      if (!rev)
        return { successMessage: "Что-то пошло не так. Попробуйте снова." };
      return { successMessage: "Отзыв добавлен успешно!" };
    },
  },
};
