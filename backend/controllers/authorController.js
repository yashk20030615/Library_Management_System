const Author = require("../models/Author");

// ✅ ADD AUTHOR
exports.addAuthor = async (req, res) => {
  try {
    const { author_id, name, bio, nationality } = req.body;

    // Validation
    if (!author_id || !name || !bio || !nationality) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Check duplicate
    const exists = await Author.findOne({ author_id });
    if (exists) {
      return res.status(400).json({ msg: "Author already exists" });
    }

    const author = new Author({
      author_id,
      name,
      bio,
      nationality,
    });

    await author.save();

    res.status(201).json({
      msg: "Author added successfully",
      author,
    });
  } catch (error) {
    console.error("ADD AUTHOR ERROR:", error);
    res.status(500).json({
      msg: "Server error",
      error: error.message,
    });
  }
};

// ✅ GET ALL AUTHORS
exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (error) {
    res.status(500).json({
      msg: "Server error",
      error: error.message,
    });
  }
};

// ✅ GET AUTHOR BY ID
exports.getAuthorById = async (req, res) => {
  try {
    const author = await Author.findOne({
      author_id: req.params.id,
    });

    if (!author) {
      return res.status(404).json({ msg: "Author not found" });
    }

    res.json(author);
  } catch (error) {
    res.status(500).json({
      msg: "Server error",
      error: error.message,
    });
  }
};

// ✅ UPDATE AUTHOR
exports.updateAuthor = async (req, res) => {
  try {
    const updated = await Author.findOneAndUpdate(
      { author_id: req.params.id },
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ msg: "Author not found" });
    }

    res.json({
      msg: "Author updated successfully",
      updated,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Server error",
      error: error.message,
    });
  }
};

// ✅ DELETE AUTHOR
exports.deleteAuthor = async (req, res) => {
  try {
    const deleted = await Author.findOneAndDelete({
      author_id: req.params.id,
    });

    if (!deleted) {
      return res.status(404).json({ msg: "Author not found" });
    }

    res.json({ msg: "Author deleted successfully" });
  } catch (error) {
    res.status(500).json({
      msg: "Server error",
      error: error.message,
    });
  }
};
