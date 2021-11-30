const mongoose = require("mongoose");

const FarmSchema = mongoose.Schema({
    name: String,
    coordinates: [String],
    city: String,
    state: String,
    phone: String,
    userId: String
});

module.exports = mongoose.model("Farm", FarmSchema);
