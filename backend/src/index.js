require("dotenv").config();

const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

// Database
const db = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  name: process.env.DB_NAME,
};

const dbUri = `mongodb+srv://gugamon:ThftKMTzAiIby790@cluster0.uxdy6.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-3mhc8l-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`;
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect(dbUri, dbOptions)
  .then(() => console.log("Database connected"))
  .catch((error) => console.log("Databased failed: ", error));

// GraphQL
const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen()
  .then(({ url }) => console.log(`Server ready at ${url}`))
  .catch((error) => console.log("Server failed: ", error));


if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => {
    console.log("Module disposed");
  });
}
