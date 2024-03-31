const dbConfig = {
  "development": {
    "username": process.env.DB_USERNAME || "postgres",
    "password": process.env.DB_PASSWORD || "postgres",
    "database": process.env.DB_NAME,
    "host": process.env.HOST || "127.0.0.1",
    "dialect": "postgres",
    "logging": false
  }
}

module.exports = dbConfig