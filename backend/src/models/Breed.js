const mongoose = require("mongoose");

const BreedSchema = mongoose.Schema({
  name: String,
  breed: Array
});

module.exports = mongoose.model("Breed", BreedSchema);
