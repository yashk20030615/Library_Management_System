import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";

export default function DisplayAuthor() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);
  const [all, setAll] = useState([]);
  const navigate = useNavigate();

  const getOne = async () => {
    const res = await api.get(`/authors/${id}`);
    setData(res.data);
    setAll([]);
  };

  const getAll = async () => {
    const res = await api.get("/authors");
    setAll(res.data);
    setData(null);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <input
          placeholder="Author ID"
          value={id}
          onChange={e => setId(e.target.value)}
        />

        <button onClick={getOne}>Display</button>
        <button onClick={getAll}>Display All</button>

        {data && <p>{data.name}</p>}
        {all.map(a => <p key={a._id}>{a.name}</p>)}

        <button onClick={() => navigate("/author")}>Back</button>
      </div>
    </div>
  );
}


/* ===================== STYLES ===================== */

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "480px",
    background: "#fff",
    padding: "30px",
    borderRadius: "14px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },

  row: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  },

  box: {
    background: "#f4f6ff",
    padding: "12px",
    borderRadius: "8px",
    marginBottom: "10px",
    borderLeft: "5px solid #667eea",
  },

  btn: {
    flex: 1,
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
  },

  btnPrimary: {
    background: "#4CAF50",
    color: "#fff",
  },

  btnSecondary: {
    background: "#2196F3",
    color: "#fff",
  },

  backBtn: {
    width: "100%",
    marginTop: "10px",
    padding: "10px",
    background: "#9e9e9e",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    cursor: "pointer",
  },
};
