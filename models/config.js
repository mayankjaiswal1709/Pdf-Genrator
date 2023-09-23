const mongoose = require("mongoose")
require('dotenv').config();

mongoose.connect(process.env.URL,{useNewUrlParser: true});
mongoose.connection.on("connected",(err,res)=>{
    console.log(`MongoDb is Now  Connected `);
});
mongoose.connection.on("error",(err,res)=>{
    console.log(`${err} MongoDb Connection Error`);
})