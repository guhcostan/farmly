const { gql } = require("apollo-server");

const types = gql`
  type Announcement {
    id: ID!
      nOx: Int
      breed: [Breed]
  }

  type Breed {
      id: ID!
      name: String
  }
`;

module.exports = types;
