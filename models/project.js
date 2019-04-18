const mongoose = require("mongoose")


var ProjectSchema = new  mongoose.Schema({
    name: String,
    image: String,
    description: String,
    link: String
});

module.exports = mongoose.model("Project", UserSchema);