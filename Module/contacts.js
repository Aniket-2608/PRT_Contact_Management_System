const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user_contacts = new Schema({
        firstName :{
            type:String, required:true
        },
        lastName :{
            type:String, required:true
        },
        email : {
            type:String, required:true,unique:true
        },
        Phone :{
            type: Number, required:true,unique:true
        }
})

const Details = mongoose.model("contacts", user_contacts);

module.exports = Details;