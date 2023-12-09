const mongoose = require('mongoose');

const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/my_database"

const databaseconnect = () => {
    mongoose
        .connect(MONGODB_URL)
        .then((conn) => console.log(`Connected to DB: ${conn.connection.host}`))
        .catch((error) => console.log(error.message))

}

module.exports = databaseconnect;