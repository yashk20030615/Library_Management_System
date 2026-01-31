import { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";

export default function UpdateBook() {
  const [title, setTitle] = useState("");
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const findBook = async () => {
    const res = await api.get(`/books/title/${title}`);
    setForm(res.data);
  };

  const updateBook = async () => {
    await api.put(`/books/${form._id}`, form);
    alert("Updated");
    navigate("/book");
  };

  return (
    <div>
      <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <button onClick={findBook}>Find</button>

      <input value={form.genre || ""} onChange={e => setForm({...form, genre:e.target.value})}/>
      <button onClick={updateBook}>Update</button>
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
