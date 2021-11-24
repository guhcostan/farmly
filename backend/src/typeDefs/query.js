const { gql } = require("apollo-server");

const query = gql`
  type Query {
    announcements: [Announcement]
    breeds: [Breed]
    breed(id: ID!): Breed
    announcement(id: ID!): Announcement
  }
`;

module.exports = query;
