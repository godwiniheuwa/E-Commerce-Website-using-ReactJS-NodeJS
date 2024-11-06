const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    MONGODB_URL: process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/ecommerce",
    JWT_SECRET: process.env.JWT_SECRET || "somethingsecret",
};
