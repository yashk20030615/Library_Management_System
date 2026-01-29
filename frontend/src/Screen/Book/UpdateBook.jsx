import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5000";

export default function UpdateBook() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [found, setFound] = useState(false);
  const [bookId, setBookId] = useState("");

  const [form, setForm] = useState({
    genre: "",
    publication_year: "",
    author_id: "",
  });

  const [msg, setMsg] = useState("");

  // 🔍 Find Book
  const findBook = async () => {
    if (!title) {
      setMsg("❌ Please enter book title");
      return;
    }

    try {
      const res = await axios.get(
        `${API}/books/title/${title}`
      );

      const book = res.data;

      setBookId(book._id);
      setForm({
        genre: book.genre,
        publication_year: book.publication_year,
        author_id: book.author_id,
      });

      setFound(true);
      setMsg("");
    } catch (err) {
      setMsg("❌ Book not found");
    }
  };

  // 🔁 Update
  const updateBook = async () => {
    if (!form.genre || !form.publication_year || !form.author_id) {
      setMsg("❌ All fields are required");
      return;
    }

    try {
      await axios.put(`${API}/books/${bookId}`, form);
      alert("✅ Book Updated Successfully");
      navigate("/book");
    } catch (err) {
      setMsg("❌ Update failed");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>✏️ Update Book</h2>

        {msg && <p style={styles.msg}>{msg}</p>}

        <input
          style={styles.input}
          placeholder="Enter Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {!found && (
          <>
            <button style={styles.primary} onClick={findBook}>
              🔍 Find Book
            </button>

            <button
              style={styles.back}
              onClick={() => navigate("/book")}
            >
              ⬅ Back
            </button>
          </>
        )}

        {found && (
          <>
            <input
              style={styles.input}
              placeholder="Genre"
              value={form.genre}
              onChange={(e) =>
                setForm({ ...form, genre: e.target.value })
              }
            />

            <input
              style={styles.input}
              placeholder="Publication Year"
              value={form.publication_year}
              onChange={(e) =>
                setForm({
                  ...form,
                  publication_year: e.target.value,
                })
              }
            />

            <input
              style={styles.input}
              placeholder="Author ID"
              value={form.author_id}
              onChange={(e) =>
                setForm({ ...form, author_id: e.target.value })
              }
            />

            <button style={styles.update} onClick={updateBook}>
              ✅ Update Book
            </button>

            <button
              style={styles.back}
              onClick={() => navigate("/book")}
            >
              ⬅ Back
            </button>
          </>
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
    width: "450px",
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
    cursor: "pointer",
    marginBottom: "10px",
  },
  update: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  back: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#9E9E9E",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    marginTop: "10px",
    cursor: "pointer",
  },
};
