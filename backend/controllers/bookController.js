const Book = require("../models/Book");
const Author = require("../models/Author");

// ✅ ADD BOOK
exports.addBook = async (req, res) => {
  try {
    const { title, genre, publication_year, author_id } = req.body;

    if (!title || !genre || !publication_year || !author_id) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // ✅ CHECK AUTHOR USING STRING ID
    const author = await Author.findOne({ author_id });
    if (!author) {
      return res.status(404).json({ msg: "Author not found" });
    }

    // ✅ CHECK DUPLICATE BOOK
    const exists = await Book.findOne({
      title: { $regex: `^${title}$`, $options: "i" },
    });

    if (exists) {
      return res.status(400).json({ msg: "Book already exists" });
    }

    const book = new Book({
      title,
      genre,
      publication_year,
      author_id,
    });

    await book.save();

    res.status(201).json({
      msg: "Book added successfully",
      book,
    });
  } catch (err) {
    console.error("ADD BOOK ERROR:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

// ✅ GET ALL BOOKS
exports.getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

// ✅ GET BY TITLE
exports.getBookByTitle = async (req, res) => {
  const book = await Book.findOne({
    title: { $regex: `^${req.params.title}$`, $options: "i" },
  });

  if (!book) return res.status(404).json({ msg: "Book not found" });

  res.json(book);
};

// ✅ GET BY AUTHOR ID
exports.getBooksByAuthor = async (req, res) => {
  const books = await Book.find({ author_id: req.params.authorId });

  if (!books.length)
    return res.status(404).json({ msg: "No books found" });

  res.json(books);
};

// ✅ UPDATE BOOK
exports.updateBook = async (req, res) => {
  const updated = await Book.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!updated)
    return res.status(404).json({ msg: "Book not found" });

  res.json(updated);
};

// ✅ DELETE BOOK
exports.deleteBookByTitle = async (req, res) => {
  const deleted = await Book.findOneAndDelete({
    title: { $regex: `^${req.params.title}$`, $options: "i" },
  });

  if (!deleted)
    return res.status(404).json({ msg: "Book not found" });

  res.json({ msg: "Book deleted successfully" });
};
