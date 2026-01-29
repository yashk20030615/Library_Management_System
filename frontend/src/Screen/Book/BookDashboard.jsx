import { useNavigate } from "react-router-dom";

export default function BookDashboard() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>📘 Book Management System</h2>
        <p style={styles.subtitle}>
          Manage books using the options below
        </p>

        <div style={styles.buttonGroup}>
          <button
            style={{ ...styles.button, ...styles.primary }}
            onClick={() => navigate("/add-book")}
          >
            ➕ Add Book
          </button>

          <button
            style={{ ...styles.button, ...styles.secondary }}
            onClick={() => navigate("/update-book")}
          >
            ✏️ Update Book
          </button>

          <button
            style={{ ...styles.button, ...styles.danger }}
            onClick={() => navigate("/delete-book")}
          >
            🗑️ Delete Book
          </button>

          <button
            style={{ ...styles.button, ...styles.dark }}
            onClick={() => navigate("/display-book")}
          >
            📄 Display Book
          </button>
          <button
            style={{ ...styles.button, ...styles.secondary }}
            onClick={() => navigate("/author-book")}
          >
            📄 Display Book By Author
          </button>
          <button
            style={{ ...styles.button, ...styles.back }}
            onClick={() => navigate("/")}
          >
            ⬅ Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "430px",
    padding: "40px 30px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
    textAlign: "center",
  },
  title: {
    marginBottom: "10px",
    color: "#333",
  },
  subtitle: {
    marginBottom: "25px",
    color: "#666",
    fontSize: "14px",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    fontWeight: "600",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  primary: {
    backgroundColor: "#4CAF50",
    color: "#fff",
  },
  secondary: {
    backgroundColor: "#FF9800",
    color: "#fff",
  },
  danger: {
    backgroundColor: "#F44336",
    color: "#fff",
  },
  dark: {
    backgroundColor: "#2196F3",
    color: "#fff",
  },
  back: {
    backgroundColor: "#9E9E9E",
    color: "#fff",
  },
};
