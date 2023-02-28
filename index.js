const express = require("express");
const mongoose  = require("mongoose");
const app = express();
const router = require("./router");
const Details = require("./Module/contacts")
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

app.use(bodyParser.urlencoded({extended:false}));


app.use(router);

try {
    mongoose.connect("mongodb://localhost/contactmanager",{
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }

mongoose.set('strictQuery', true);
app.listen(5000, ()=>{
    console.log("Server listening at 5000");
})