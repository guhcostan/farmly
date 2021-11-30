const breedResolver = require("./breedResolver");
const announcementResolver = require("./announcementResolver");
const userResolver = require("./userResolver");
const farmResolver = require("./farmResolver");

const resolvers = [breedResolver, announcementResolver, userResolver, farmResolver];

module.exports = resolvers;
