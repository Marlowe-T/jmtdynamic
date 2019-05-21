const mongoose = require("mongoose")


var UserAppSchema = new  mongoose.Schema({
    name: String,
    image: String,
    description: String,
    address: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});

module.exports = mongoose.model("UserApp", UserAppSchema);