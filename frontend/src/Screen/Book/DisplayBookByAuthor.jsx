import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5000";

export default function DisplayBooksByAuthor() {
  const navigate = useNavigate();

  const [authorId, setAuthorId] = useState("");
  const [books, setBooks] = useState([]);
  const [msg, setMsg] = useState("");

  const fetchBooks = async () => {
    if (!authorId) {
      setMsg("❌ Please enter Author ID");
      setBooks([]);
      return;
    }

    try {
      const res = await axios.get(
        `${API}/books/author/${authorId}`
      );

      if (res.data.length === 0) {
        setMsg("❌ No books found for this Author");
        setBooks([]);
      } else {
        setBooks(res.data);
        setMsg("");
      }
    } catch (error) {
      setMsg("❌ Invalid Author ID");
      setBooks([]);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>📚 Display Books By Author</h2>

        {msg && <p style={styles.msg}>{msg}</p>}

        <input
          style={styles.input}
          placeholder="Enter Author ID"
          value={authorId}
          onChange={(e) => setAuthorId(e.target.value)}
        />

        <button style={styles.primary} onClick={fetchBooks}>
          📖 Display
        </button>

        <button
          style={styles.back}
          onClick={() => navigate("/book")}
        >
          ⬅ Back
        </button>

        {/* RESULT */}
        {books.length > 0 && (
          <div style={styles.resultBox}>
            <h3>📚 Books List</h3>
            {books.map((book, index) => (
              <div key={index} style={styles.bookCard}>
                <p><b>Title:</b> {book.title}</p>
                <p><b>Genre:</b> {book.genre}</p>
                <p><b>Year:</b> {book.publication_year}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#667eea,#764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "480px",
    padding: "35px",
    background: "#fff",
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
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  primary: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#2196F3",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    marginBottom: "10px",
    cursor: "pointer",
  },
  back: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#9E9E9E",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  resultBox: {
    marginTop: "20px",
    textAlign: "left",
  },
  bookCard: {
    padding: "10px",
    marginBottom: "10px",
    background: "#f4f4f4",
    borderRadius: "8px",
  },
};
