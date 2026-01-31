import { useState } from "react";
import api from "../../api";

export default function DisplayBook() {
  const [title, setTitle] = useState("");
  const [books, setBooks] = useState([]);

  const getOne = async () => {
    const res = await api.get(`/books/title/${title}`);
    setBooks([res.data]);
  };

  const getAll = async () => {
    const res = await api.get("/books");
    setBooks(res.data);
  };

  return (
    <div>
      <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <button onClick={getOne}>Get One</button>
      <button onClick={getAll}>Get All</button>

      {books.map(b => (
        <p key={b._id}>{b.title}</p>
      ))}
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
