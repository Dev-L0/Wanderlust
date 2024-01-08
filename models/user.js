const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passportLocalMongoose = require("passport-local-mongoose");

const userSchmena = new Schema({
    email:{
        type:String,
        required:true
    }
    //by default username will be added along with hashed password and salt values
});
userSchmena.plugin(passportLocalMongoose); //it will add username and password automatically
module.exports = mongoose.model("User", userSchmena);