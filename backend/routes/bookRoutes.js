const express = require("express");
const router = express.Router();
const controller = require("../controllers/bookController");

router.post("/", controller.addBook);
router.get("/", controller.getBooks);

// ⚠️ Always above :id
router.get("/title/:title", controller.getBookByTitle);
router.get("/author/:authorId", controller.getBooksByAuthor);

router.put("/:id", controller.updateBook);
router.delete("/title/:title", controller.deleteBookByTitle);

module.exports = router;
