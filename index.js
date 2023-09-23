const express = require('express')
const app = express()
require('dotenv').config()
require("./models/config")
// const docx = require('docx');
const pdfRoute = require('./routes/pdfRoute')


app.use(express.json());

app.use("/", pdfRoute);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
  

app.listen(process.env.PORT, (req, res )=>{
    console.log(`Server started running on port ${process.env.PORT}`);
});