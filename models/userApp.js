const mongoose = require("mongoose")


var UserAppSchema = new  mongoose.Schema({
    name: String,
    address: String
});

module.exports = mongoose.model("UserApp", UserSchema);