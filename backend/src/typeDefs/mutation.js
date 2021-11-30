const { gql } = require("apollo-server");

const mutation = gql`
  type Mutation {
    createAnnouncement(announcement: AnnouncementInput): Announcement
    updateAnnouncement(id: String, announcement: AnnouncementInput): Announcement
    deleteAnnouncement(id: String): Announcement

    signup(user: UserInput): Authorization
    login(user: LoginInput): Authorization
  }

  input AnnouncementInput {
    name: String
    breedId: String
  }
  
  input UserInput {
    name: String
    email: String
    password: String
  }
  
  input LoginInput {
    email: String
    password: String
  }
`;

module.exports = mutation;
