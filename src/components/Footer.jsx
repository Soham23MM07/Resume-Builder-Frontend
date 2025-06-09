export const Footer = () => {
  return (
    <footer
      className="bg-blue-950"
      style={{
        width: "100%",

        color: "#fbe8dc", // very light warm cream for good contrast
        fontSize: "14px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 24px",
        borderTop: "1px solid rgba(255, 255, 255, 0.2)",
        userSelect: "none",
      }}
    >
      <div style={{ fontWeight: "500" }}>
        Made with ❤️ by{" "}
        <span style={{ fontWeight: "700", color: "#fcd9c9" }}>Soham Ghag</span>
      </div>

      <div style={{ display: "flex", gap: "24px", fontWeight: "500" }}>
        {["Privacy", "Terms", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            style={{
              color: "#fcd9c9",
              textDecoration: "none",
              cursor: "pointer",
              transition: "color 0.3s",
              userSelect: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff4f1")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#fcd9c9")}
          >
            {item}
          </a>
        ))}
      </div>

      <div style={{ fontSize: "12px", color: "#f2c6b0", fontWeight: "500" }}>
        © {new Date().getFullYear()} Resume Builder. All rights reserved.
      </div>
    </footer>
  );
};
