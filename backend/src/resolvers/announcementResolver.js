const Announcement = require("../models/Announcement");
const Breed = require("../models/Breed");

const announcementResolver = {
  Query: {
    announcements() {
      return Announcement.find();
    },
    announcement(_, { id }) {
      return Announcement.findById(id);
    },
  },
  Announcement: {
    breed(_parent, y, z, x) {
      return [Breed.findById(JSON.parse(JSON.stringify(_parent)).breedId)]
    }
  },
  Mutation: {
    createAnnouncement(_, { announcement }) {
      const newAnnouncement = new Announcement(announcement);
      return newAnnouncement.save();
    },
    updateAnnouncement(_, { id, announcement }) {
      return Announcement.findByIdAndUpdate(id, announcement, {
        new: true,
      });
    },
    deleteAnnouncement(_, { id }) {
      return Announcement.findByIdAndRemove(id);
    },
  },
};

module.exports = announcementResolver;
