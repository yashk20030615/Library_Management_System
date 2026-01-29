import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>📚 Library Management System</h1>
        <p style={styles.subtitle}>
          Select your role to continue
        </p>

        <div style={styles.buttonGroup}>
          <button
            style={{ ...styles.button, ...styles.authorBtn }}
            onClick={() => navigate("/author")}
          >
            Author
          </button>

          <button
            style={{ ...styles.button, ...styles.userBtn }}
            onClick={() => navigate("/book")}
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #74ebd5, #9face6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "500px",
    padding: "40px 30px",
    backgroundColor: "#fff",
    borderRadius: "18px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  title: {
    marginBottom: "10px",
    color: "#333",
  },
  subtitle: {
    marginBottom: "30px",
    color: "#666",
    fontSize: "14px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
  },
  button: {
    flex: 1,
    padding: "12px 0",
    fontSize: "16px",
    fontWeight: "600",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  authorBtn: {
    backgroundColor: "#4CAF50",
    color: "#fff",
  },
  userBtn: {
    backgroundColor: "#2196F3",
    color: "#fff",
  },
};
