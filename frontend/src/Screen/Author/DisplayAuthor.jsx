import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DisplayAuthor() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);
  const [all, setAll] = useState([]);
  const navigate = useNavigate();

  const getOne = async () => {
    if (!id) {
      alert("Enter Author ID");
      return;
    }

    try {
      const res = await axios.get(
        `http://localhost:5000/authors/${id}`
      );
      setData(res.data);
      setAll([]);
    } catch (err) {
      alert(err.response?.data?.msg || "Author not found");
    }
  };

  const getAll = async () => {
    try {
      const res = await axios.get("http://localhost:5000/authors");
      setAll(res.data);
      setData(null);
    } catch (err) {
      alert("Failed to fetch authors");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={{ marginBottom: "15px" }}>📚 Display Author</h2>

        <input
          placeholder="Enter Author ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={styles.input}
        />

        <div style={styles.row}>
          <button
            style={{ ...styles.btn, ...styles.btnPrimary }}
            onClick={getOne}
          >
            Display
          </button>

          <button
            style={{ ...styles.btn, ...styles.btnSecondary }}
            onClick={getAll}
          >
            Display All
          </button>
        </div>

        {/* Single Author */}
        {data && (
          <div style={styles.box}>
            <p><b>ID:</b> {data.author_id}</p>
            <p><b>Name:</b> {data.name}</p>
            <p><b>Bio:</b> {data.bio}</p>
            <p><b>Nationality:</b> {data.nationality}</p>
          </div>
        )}

        {/* All Authors */}
        {all.map((a) => (
          <div key={a._id} style={styles.box}>
            <p><b>ID:</b> {a.author_id}</p>
            <p><b>Name:</b> {a.name}</p>
          </div>
        ))}

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
