const breedResolver = require("./breedResolver");
const announcementResolver = require("./announcementResolver");
const userResolver = require("./userResolver");

const resolvers = [breedResolver, announcementResolver, userResolver];

module.exports = resolvers;
