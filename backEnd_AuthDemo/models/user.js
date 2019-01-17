var mongoose=require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username:String,
    password:String
});

UserSchema.plugin(passportLocalMongoose);//take package and add several method inside the Schema;
// hash the password and decode it

module.exports = mongoose.model("User", UserSchema);