import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5000";

export default function DisplayBook() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [book, setBook] = useState(null);
  const [allBooks, setAllBooks] = useState([]);
  const [msg, setMsg] = useState("");

  // 🔍 Display single book
  const displayBook = async () => {
    if (!title) {
      setMsg("❌ Please enter book title");
      return;
    }

    try {
      const res = await axios.get(`${API}/books/title/${title}`);
      setBook(res.data);
      setAllBooks([]);
      setMsg("");
    } catch (err) {
      setBook(null);
      setMsg("❌ Book not found");
    }
  };

  // 📚 Display all books
  const displayAll = async () => {
    try {
      const res = await axios.get(`${API}/books`);
      setAllBooks(res.data);
      setBook(null);
      setMsg("");
    } catch (err) {
      setMsg("❌ Unable to fetch books");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>📚 Display Book</h2>

        {msg && <p style={styles.msg}>{msg}</p>}

        <input
          style={styles.input}
          placeholder="Enter Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div style={styles.btnGroup}>
          <button style={styles.primary} onClick={displayBook}>
            Display
          </button>

          <button style={styles.secondary} onClick={displayAll}>
            Display All
          </button>
        </div>

        {/* SINGLE BOOK */}
        {book && (
          <div style={styles.result}>
            <h4>{book.title}</h4>
            <p><b>Genre:</b> {book.genre}</p>
            <p><b>Year:</b> {book.publication_year}</p>
            <p><b>Author ID:</b> {book.author_id}</p>
          </div>
        )}

        {/* ALL BOOKS */}
        {allBooks.length > 0 &&
          allBooks.map((b) => (
            <div key={b._id} style={styles.result}>
              <h4><strong>Title : </strong>{b.title}</h4>
              <p><strong>Genre : </strong>{b.genre} | <strong>Publication Year :</strong>{b.publication_year}</p>
            </div>
          ))}

        <button
          style={styles.back}
          onClick={() => navigate("/book")}
        >
          ⬅ Back
        </button>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "450px",
    padding: "30px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
    textAlign: "center",
  },
  title: {
    marginBottom: "15px",
  },
  msg: {
    color: "#e53935",
    fontWeight: "600",
    marginBottom: "10px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  btnGroup: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  },
  primary: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  secondary: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#2196F3",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  result: {
    background: "#f4f4f4",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
    textAlign: "left",
  },
  back: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#9E9E9E",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  },
};
