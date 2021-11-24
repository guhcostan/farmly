const mongoose = require("mongoose");

const AnnouncementSchema = mongoose.Schema({
  nOx: Number,
});

module.exports = mongoose.model("Announcement", AnnouncementSchema);
