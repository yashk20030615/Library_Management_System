import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UpdateAuthor() {
  const navigate = useNavigate();

  const [authorId, setAuthorId] = useState("");
  const [form, setForm] = useState({
    name: "",
    bio: "",
    nationality: "",
  });

  const [found, setFound] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState(""); // success / error

  // 🔍 FIND AUTHOR
  const findAuthor = async () => {
    if (!authorId) {
      setType("error");
      setMessage("Please enter Author ID");
      return;
    }

    try {
      const res = await axios.get(
        `http://localhost:5000/authors/${authorId}`
      );

      setForm({
        name: res.data.name,
        bio: res.data.bio,
        nationality: res.data.nationality,
      });

      setFound(true);
      setMessage("");
    } catch (err) {
      setFound(false);
      setType("error");
      setMessage("Author not found!");
    }
  };

  // ✅ UPDATE AUTHOR
  const updateAuthor = async () => {
    if (!form.name || !form.bio || !form.nationality) {
      setType("error");
      setMessage("All fields are required");
      return;
    }

    try {
      await axios.put(
        `http://localhost:5000/authors/${authorId}`,
        form
      );

      setType("success");
      setMessage("Author updated successfully!");

      setTimeout(() => {
        navigate("/author");
      }, 1500);
    } catch (err) {
      setType("error");
      setMessage("Update failed");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>✏️ Update Author</h2>

        {/* MESSAGE */}
        {message && (
          <div
            style={{
              ...styles.alert,
              backgroundColor:
                type === "success" ? "#d4edda" : "#f8d7da",
              color: type === "success" ? "#155724" : "#721c24",
            }}
          >
            {message}
          </div>
        )}

        {/* AUTHOR ID */}
        <input
          style={styles.input}
          placeholder="Enter Author ID"
          value={authorId}
          onChange={(e) => setAuthorId(e.target.value)}
        />

        <button style={styles.findBtn} onClick={findAuthor}>
          Find
        </button>

        {/* SHOW ONLY AFTER FIND */}
        {found && (
          <>
            <input
              style={styles.input}
              value={form.name}
              placeholder="Name"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              style={styles.input}
              value={form.bio}
              placeholder="Bio"
              onChange={(e) =>
                setForm({ ...form, bio: e.target.value })
              }
            />

            <input
              style={styles.input}
              value={form.nationality}
              placeholder="Nationality"
              onChange={(e) =>
                setForm({
                  ...form,
                  nationality: e.target.value,
                })
              }
            />

            <button
              style={styles.updateBtn}
              onClick={updateAuthor}
            >
              Update Author
            </button>
          </>
        )}

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
