import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";

export default function UpdateAuthor() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [form, setForm] = useState({ name: "", bio: "", nationality: "" });

  const findAuthor = async () => {
    const res = await api.get(`/authors/${id}`);
    setForm(res.data);
  };

  const updateAuthor = async () => {
    await api.put(`/authors/${id}`, form);
    alert("Updated");
    navigate("/author");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <input placeholder="Author ID" onChange={e => setId(e.target.value)} />
        <button onClick={findAuthor}>Find</button>

        <input value={form.name} onChange={e => setForm({...form,name:e.target.value})}/>
        <input value={form.bio} onChange={e => setForm({...form,bio:e.target.value})}/>
        <input value={form.nationality} onChange={e => setForm({...form,nationality:e.target.value})}/>

        <button onClick={updateAuthor}>Update</button>
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
    width: "430px",
    padding: "35px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
    textAlign: "center",
  },
  title: {
    marginBottom: "15px",
  },
  alert: {
    padding: "10px",
    borderRadius: "6px",
    marginBottom: "15px",
    fontWeight: "600",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  findBtn: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#2196F3",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    marginBottom: "15px",
    cursor: "pointer",
  },
  updateBtn: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  backBtn: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#9E9E9E",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    marginTop: "12px",
  },
};
