const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  author_id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Author", authorSchema);
