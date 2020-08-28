module.exports = {
  development: {
    username: "postgres",
    password: "example",
    database: "bq_api_development",
    host: "db",
    dialect: "postgres",
    operatorsAliases: false,
  },
  // test: {
  //   username: "postgres",
  //   password: "example",
  //   database: "bq_api_test",
  //   host: "db",
  //   dialect: "postgres",
  //   operatorsAliases: false,
  // },
  production: {
    username: "postgres",
    password: "example",
    database: "bq_api",
    host: "db",
    dialect: "postgres",
    operatorsAliases: false,
  },
};
