import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";

export default function DeleteBook() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const deleteBook = async () => {
    try {
      await api.delete(`/books/title/${title}`);
      alert("Book Deleted");
      navigate("/book");
    } catch {
      alert("Book not found");
    }
  };

  return (
    <div>
      <input placeholder="Book Title" onChange={e => setTitle(e.target.value)} />
      <button onClick={deleteBook}>Delete</button>
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
