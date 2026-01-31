import { useState } from "react";
import api from "../../api";

export default function DisplayBooksByAuthor() {
  const [id, setId] = useState("");
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await api.get(`/books/author/${id}`);
    setBooks(res.data);
  };

  return (
    <div>
      <input placeholder="Author ID" onChange={e => setId(e.target.value)} />
      <button onClick={fetchBooks}>Fetch</button>

      {books.map(b => (
        <p key={b._id}>{b.title}</p>
      ))}
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
