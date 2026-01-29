const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  genre: {
    type: String,
    required: true,
  },
  publication_year: {
    type: Number,
    required: true,
  },
  author_id: {
    type: String, // ✅ STRING (because you are using 1, 2, 3...)
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
