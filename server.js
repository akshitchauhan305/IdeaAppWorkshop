const express = require('express');
const mongoose = require('mongoose');
const serverConfig = require('./configs/server.config')
const dbConfig = require('./configs/db.config')

const app = express();

/**
 * Logic to connect to MongoDB and create an ADMIN User
 * Need to have the MongoDB uo and running in ur local machine
 */
mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;
db.on("error",()=>{
    console.log("Error while connectiong to DB")
});
db.once("open",()=>{
    console.log("DB is connected")
})

app.listen(serverConfig.PORT, () => {
    console.log(`Server started on the port number ${serverConfig.PORT} `)
});