import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DeleteAuthor() {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const deleteAuthor = async () => {
    setMessage("");
    setError("");

    // Validation
    if (!id.trim()) {
      setError("❌ Please enter Author ID");
      return;
    }

    const confirm = window.confirm(
      "Are you sure you want to delete this author?"
    );
    if (!confirm) return;

    try {
      const res = await axios.delete(
        `http://localhost:5000/authors/${id}`
      );

      setMessage("✅ Author deleted successfully");
      setId("");
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.msg);
      } else {
        setError("❌ Author not found");
      }
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>🗑 Delete Author</h2>

        {/* Message */}
        {error && <p style={styles.error}>{error}</p>}
        {message && <p style={styles.success}>{message}</p>}

        <input
          style={styles.input}
          placeholder="Enter Author ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <button style={styles.deleteBtn} onClick={deleteAuthor}>
          Delete Author
        </button>

        <button
          style={styles.backBtn}
          onClick={() => navigate("/author")}
        >
          ⬅ Back
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "400px",
    padding: "35px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
    textAlign: "center",
  },
  title: {
    marginBottom: "15px",
    color: "#333",
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
    cursor: "pointer",
    fontWeight: "bold",
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
  error: {
    color: "red",
    marginBottom: "10px",
    fontWeight: "600",
  },
  success: {
    color: "green",
    marginBottom: "10px",
    fontWeight: "600",
  },
};
