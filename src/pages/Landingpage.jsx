import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SignInPage from "../auth/sign-in";
import toast from "react-hot-toast";

export const Landingpage = ({ sign }) => {
  const handleGet = () => {
    toast.error("Please Sign In");
  };

  return (
    <>
      {/* Landling page start */}

      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #1e293b 0%, #334155 50%, #0f172a 100%)",
          color: "white",
          paddingTop: "40px",
          paddingBottom: "40px",
          paddingLeft: "12px",
          paddingRight: "12px",
          filter: sign ? "blur(4px)" : "none",
          pointerEvents: sign ? "none" : "auto",
          userSelect: sign ? "none" : "auto",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        {/* Motion Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            maxWidth: "760px",
          }}
        >
          <h1
            style={{
              fontSize: "3.2rem",
              fontWeight: "800",
              marginBottom: "16px",
              color: "#facc15",
              letterSpacing: "-1px",
            }}
          >
            Build Your Resume Effortlessly
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#cbd5e1",
              marginBottom: "28px",
              fontWeight: "400",
            }}
          >
            Craft a standout resume in minutes with our smart and intuitive
            resume builder. No learning curve. Just results.
          </p>
          <Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGet}
              style={{
                backgroundColor: "#facc15",
                color: "#0f172a",
                padding: "12px 24px",
                borderRadius: "14px",
                fontWeight: "700",
                fontSize: "16px",
                boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#fde047")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#facc15")
              }
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "24px",
            marginTop: "48px",
          }}
        >
          {[
            {
              title: "Easy Editing",
              desc: "Update your resume easily using drag-and-drop and guided inputs.",
            },
            {
              title: "Beautiful Templates",
              desc: "Professionally designed templates to make you stand out.",
            },
            {
              title: "One-Click Export",
              desc: "Download as PDF or DOCX with a single click — ready for recruiters.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              style={{
                backgroundColor: "#1e293b",
                padding: "28px",
                borderRadius: "14px",
                width: "300px",
                boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
                border: "1px solid #334155",
                textAlign: "left",
              }}
            >
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#facc15",
                  marginBottom: "12px",
                }}
              >
                {item.title}
              </h2>
              <p
                style={{
                  color: "#cbd5e1",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/*   Sign In Button */}
      {sign && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          ></div>
          <div style={{ position: "relative", zIndex: 10 }}>
            <SignInPage />
          </div>
        </div>
      )}
    </>
  );
};
