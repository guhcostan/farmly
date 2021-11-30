const Announcement = require("../models/Announcement");
const Breed = require("../models/Breed");

const announcementResolver = {
    Query: {
        announcements() {
            return Announcement.find();
        },
        announcement(_, {id}) {
            return Announcement.findById(id);
        },
    },
    Announcement: {
        breed(_parent, y, z, x) {
            return Breed.findById(_parent.breedId)
        }
    },
    Mutation: {
        createAnnouncement(_, {announcement}, {currentUser}) {
            if (!currentUser) throw new Error('Você precisa fazer login');
            const newAnnouncement = new Announcement(announcement);
            return newAnnouncement.save();
        },
        updateAnnouncement(_, {id, announcement}, {currentUser}) {
            if (!currentUser) throw new Error('Você precisa fazer login');
            return Announcement.findByIdAndUpdate(id, announcement, {
                new: true,
            });
        },
        deleteAnnouncement(_, {id}, {currentUser}) {
            if (!currentUser) throw new Error('Você precisa fazer login');
            return Announcement.findByIdAndRemove(id);
        },
    },
};

module.exports = announcementResolver;
