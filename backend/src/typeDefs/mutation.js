const { gql } = require("apollo-server");

const mutation = gql`
  type Mutation {
    createAnnouncement(announcement: AnnouncementInput): Announcement
    updateAnnouncement(id: String, announcement: AnnouncementInput): Announcement
    deleteAnnouncement(id: String): Announcement
  }

  input AnnouncementInput {
    name: String
    breedId: String
  }
`;

module.exports = mutation;
