import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";

export default function DeleteAuthor() {
  const [id, setId] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const deleteAuthor = async () => {
    if (!id) return alert("Enter ID");

    try {
      await api.delete(`/authors/${id}`);
      setMsg("Author deleted successfully");
      setId("");
    } catch {
      setMsg("Author not found");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2>Delete Author</h2>

        {msg && <p>{msg}</p>}

        <input
          placeholder="Author ID"
          value={id}
          onChange={e => setId(e.target.value)}
          style={styles.input}
        />

        <button onClick={deleteAuthor}>Delete</button>
        <button onClick={() => navigate("/author")}>Back</button>
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
