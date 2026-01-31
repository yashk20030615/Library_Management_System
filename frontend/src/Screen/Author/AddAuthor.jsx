import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";

export default function AddAuthor() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    author_id: "",
    name: "",
    bio: "",
    nationality: "",
  });

  const [msg, setMsg] = useState("");
  const [type, setType] = useState("");

  const submit = async () => {
    if (!form.author_id || !form.name || !form.bio || !form.nationality) {
      setType("error");
      setMsg("All fields are required");
      return;
    }

    try {
      await api.post("/authors", form);

      setType("success");
      setMsg("Author added successfully");

      setTimeout(() => navigate("/author"), 1500);
    } catch (err) {
      setType("error");
      setMsg("Something went wrong");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2>Add Author</h2>

        {msg && (
          <p style={{ color: type === "error" ? "red" : "green" }}>
            {msg}
          </p>
        )}

        <input placeholder="Author ID"
          value={form.author_id}
          onChange={e => setForm({ ...form, author_id: e.target.value })}
          style={styles.input}
        />

        <input placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          style={styles.input}
        />

        <input placeholder="Bio"
          value={form.bio}
          onChange={e => setForm({ ...form, bio: e.target.value })}
          style={styles.input}
        />

        <input placeholder="Nationality"
          value={form.nationality}
          onChange={e => setForm({ ...form, nationality: e.target.value })}
          style={styles.input}
        />

        <button onClick={submit} style={styles.save}>Add Author</button>
        <button onClick={() => navigate("/author")} style={styles.back}>Back</button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#667eea,#764ba2)",
  },
  card: {
    width: "420px",
    padding: "30px",
    background: "#fff",
    borderRadius: "12px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
  },
  save: {
    width: "100%",
    padding: "10px",
    background: "green",
    color: "#fff",
    border: "none",
    marginTop: "10px",
  },
  back: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    background: "#999",
    color: "#fff",
    border: "none",
  },
};
