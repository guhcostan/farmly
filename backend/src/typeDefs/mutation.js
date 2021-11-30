const {gql} = require("apollo-server");

const mutation = gql`
    type Mutation {
        createAnnouncement(announcement: AnnouncementInput): Announcement
        updateAnnouncement(id: String, announcement: AnnouncementInput): Announcement
        deleteAnnouncement(id: String): Announcement

        createFarm(farm: FarmInput): Farm
        updateFarm(id: String, farm: FarmInput): Farm
        deleteFarm(id: String): Farm

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

    input FarmInput {
        name: String
        coordinates: [String]
        city: String
        state: String
        phone: String
        userId: String
    }
`;

module.exports = mutation;
