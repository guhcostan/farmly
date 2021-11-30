const Breed = require("../models/Breed");

const breedResolver = {
    Query: {
        breeds() {
            return Breed.find();
        },
    },
};

module.exports = breedResolver;
