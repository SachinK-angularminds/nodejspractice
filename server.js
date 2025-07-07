const express = require('express');
const authentic=require('./src/news-api/middleware/authentic')
const authRoutes=require('./src/news-api/routes/authRoutes')
require('dotenv').config();	

const MongodbClient=require('./src/news-api/mongodb-connectivity/connectToDb');

const app = express();
const PORT = process.env.PORT ;
const mongo = new MongodbClient(process.env.MONGODB_URI)
mongo.main();

//check authentication
app.use("/api",authRoutes)

app.listen(PORT,()=>{
    console.log(`Listening to the port ${PORT}`)
});
