import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";

export default function AddBook() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    genre: "",
    publication_year: "",
    author_id: "",
  });

  const [msg, setMsg] = useState("");

  const submit = async () => {
    if (!form.title || !form.genre || !form.publication_year || !form.author_id) {
      setMsg("❌ All fields are required");
      return;
    }

    try {
      await api.post("/books", form);
      alert("✅ Book Added Successfully");
      navigate("/book");
    } catch {
      setMsg("❌ Server Error");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2>📘 Add Book</h2>

        {msg && <p style={styles.msg}>{msg}</p>}

        <input style={styles.input} placeholder="Title"
          onChange={e => setForm({ ...form, title: e.target.value })} />

        <input style={styles.input} placeholder="Genre"
          onChange={e => setForm({ ...form, genre: e.target.value })} />

        <input style={styles.input} placeholder="Year"
          onChange={e => setForm({ ...form, publication_year: e.target.value })} />

        <input style={styles.input} placeholder="Author ID"
          onChange={e => setForm({ ...form, author_id: e.target.value })} />

        <button onClick={submit}>Add Book</button>
        <button onClick={() => navigate("/book")}>Back</button>
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
    width: "440px",
    padding: "35px 30px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
  },
  msg: {
    marginBottom: "15px",
    fontWeight: "600",
    color: "#e53935",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  saveBtn: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
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
