import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5000";

export default function DeleteBook() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");

  const deleteBook = async () => {
    setMsg("");

    if (!title) {
      setMsg("❌ Please enter book title");
      return;
    }

    try {
      await axios.delete(`${API}/books/title/${title}`);
      alert("✅ Book Deleted Successfully");
      navigate("/book");
    } catch (err) {
      if (err.response?.data?.msg) {
        setMsg("❌ " + err.response.data.msg);
      } else {
        setMsg("❌ Server error");
      }
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>🗑 Delete Book</h2>

        {msg && <p style={styles.msg}>{msg}</p>}

        <input
          style={styles.input}
          placeholder="Enter Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button style={styles.deleteBtn} onClick={deleteBook}>
          Delete Book
        </button>

        <button
          style={styles.backBtn}
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
    background: "linear-gradient(135deg,#667eea,#764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "420px",
    padding: "35px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
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
  deleteBtn: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#e53935",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
  },
  backBtn: {
    width: "100%",
    padding: "12px",
    marginTop: "12px",
    backgroundColor: "#9E9E9E",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
