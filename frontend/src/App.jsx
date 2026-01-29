import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Screen/Home";
import AuthorDashboard from "./Screen/Author/AuthorDashboard";
import AddAuthor from "./Screen/Author/AddAuthor";
import AddBook from "./Screen/Book/AddBook";
import BookDashboard from "./Screen/Book/BookDashboard";
import UpdateAuthor from "./Screen/Author/UpdateAuthor";
import DeleteAuthor from "./Screen/Author/DeleteAuthor";
import DisplayAuthor from "./Screen/Author/DisplayAuthor";
import UpdateBook from "./Screen/Book/UpdateBook";
import DeleteBook from "./Screen/Book/DeleteBook";
import DisplayBook from "./Screen/Book/DisplayBook";
import DisplayBookByAuthor from "./Screen/Book/DisplayBookByAuthor";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/author" element={<AuthorDashboard />} />
        <Route path="/book" element={<BookDashboard />} />
        <Route path="/add-author" element={<AddAuthor />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/update-author" element={<UpdateAuthor />} />
        <Route path="/delete-author" element={<DeleteAuthor />} />
        <Route path="/display-author" element={<DisplayAuthor />} />
        <Route path="/update-book" element={<UpdateBook />} />
        <Route path="/delete-book" element={<DeleteBook />} />
        <Route path="/display-book" element={<DisplayBook />} />
        <Route path="/author-book" element={<DisplayBookByAuthor />} />
      </Routes>
    </Router>
  );
}

export default App;
