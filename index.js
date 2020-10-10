const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const config = require("config");
const jwt = require("jsonwebtoken");

const typeDefs = require("./server/schema");
const resolvers = require("./server/resolvers/resolvers");
const { createStore } = require("./server/utils");
const ProductsAPI = require("./server/datasources/products");
const UserAPI = require("./server/datasources/user");
const ShopAPI = require("./server/datasources/shop");

const store = createStore();

const server = new ApolloServer({
  context: async ({ req, res }) => {
    const auth = (req.headers && req.headers.authorization) || "";
    if (auth.length === 0) return { user: null };
    try {
      const { userId } = jwt.verify(auth, config.get("jwtSecret"));
      const user = await store.User.findOne({ where: { id: userId } });
      return { user };
    } catch (e) {
      res.set("auth", "jwt expired");
    }
  },
  typeDefs,
  resolvers,
  dataSources: () => ({
    shopAPI: new ShopAPI({ store }),
    userAPI: new UserAPI({ store }),
    productsAPI: new ProductsAPI({ store }),
  }),
});

const app = express();
app.use(cors());

app.use("/static", express.static(path.join(__dirname, "public")));

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));
  app.get("*", (_, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

server.applyMiddleware({ app });

const PORT = config.get("port");
app.listen({ port: PORT }, () => {
  console.log(
    "🚀 Server ready at",
    `https://localhost:${PORT}${server.graphqlPath}`
  );
});
