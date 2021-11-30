const {gql} = require("apollo-server");

const types = gql`
    type Announcement {
        id: ID!
        nOx: Int
        farm: Farm
        breed: Breed
    }

    type Breed {
        id: ID!
        name: String
    }
    
    type Farm {
        id: ID!
        name: String
        coordinates: [String]
        city: String
        state: String
        phone: String
        userId: String
    }

    type Authorization {
        token: String
    }

    type User {
        id: ID!
        name: String
        email: String
        password: String
        farms: [Farm]
    }
`;

module.exports = types;
