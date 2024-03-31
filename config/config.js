require('dotenv').config()
const dbConfig = {
  "development": {
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME,
    host: process.env.DB_HOST || "127.0.0.1",
    port: '5432',
    dialect: "postgres",
    dialectModule: require('pg'),
    pool: {
      max: 3,
      min: 0,
      acquire: 5000,
      idle: 2000,
      evict: 500
    },
    define: {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    },
    logging: false,
  }
}

module.exports = dbConfig