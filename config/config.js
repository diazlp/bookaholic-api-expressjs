const dbConfig = {
  "development": {
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME,
    host: process.env.HOST || "127.0.0.1",
    dialect: "postgres",
    dialectModule: require('pg'),
    define: {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    },
    logging: false,
  }
}

module.exports = dbConfig