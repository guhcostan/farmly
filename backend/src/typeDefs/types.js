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

  type Authorization {
      token: String
  }
  
  type User {
      id: ID!
      name: String
      email: String
      password: String
  }
`;

module.exports = types;
