import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Template1 } from "../templates/Template1";
import { Template2 } from "../templates/Template2";
import { Template3 } from "../templates/Template3";

export const Dashboard = ({
  setUpdateData,
  resumeData,
  setResumeData,
  setUpdate,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { getToken } = useAuth();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const token = await getToken();
    try {
      setError("");
      setLoading(true);
      const response = await fetch(`http://localhost:3000/api/resume/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setLoading(false);
      window.location.reload();
      console.log(response);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  const getResume = async () => {
    const token = await getToken();
    try {
      setError("");
      setLoading(true);

      const response = await fetch("http://localhost:3000/api/resume", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error(`API error: ${response.status}`);

      const data = await response.json();
      console.log("Raw API Response:", data);
      setResumeData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message || "Failed to load resume");
      console.error("Error fetching resume:", error.message);
    }
  };

  const handleupdate = async (id) => {
    const token = await getToken();
    try {
      console.log(id);

      const response = await fetch(`http://localhost:3000/api/resume/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();

      console.log(result.data);
      setUpdateData(result.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setUpdate(id);
      navigate("/createresume");
    }
  };

  useEffect(() => {
    getResume();
  }, []);

  const handleNavigateToCreate = () => {
    navigate("/createresume");
  };

  const TEMPLATE_WIDTH = 900;
  const TEMPLATE_HEIGHT = 1400;

  const CARD_WIDTH = 260;
  const CARD_HEIGHT = 360;

  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        padding: "40px 24px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "25px",
          fontWeight: "700",
          color: "#0f172a",
          marginBottom: "32px",
        }}
      >
        Your Resumes
      </h1>

      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        {/* Add Resume Button Card */}
        <div
          style={{
            width: CARD_WIDTH,
            minHeight: CARD_HEIGHT,
            backgroundColor: "#e2e8f0",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "24px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
            transition: "transform 0.2s ease",
            cursor: "pointer",
          }}
          onClick={handleNavigateToCreate}
          title="Add Resume"
        >
          <button
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              backgroundColor: "#0f172a",
              color: "#ffffff",
              fontSize: "28px",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "12px",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#1e293b")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#0f172a")
            }
            aria-label="Add New Resume"
          >
            +
          </button>
          <p
            style={{
              color: "#1e293b",
              fontSize: "16px",
              fontWeight: "600",
              userSelect: "none",
            }}
          >
            Add New Resume
          </p>
        </div>

        {/* Resume Thumbnails */}
        {loading ? (
          <h2
            style={{
              fontSize: "18px",
              color: "#475569",
              fontWeight: "600",
            }}
          >
            Loading resumes...
          </h2>
        ) : resumeData.length !== 0 ? (
          resumeData.map((resume) => {
            const key = resume._id;

            const scaleWidth = CARD_WIDTH / TEMPLATE_WIDTH;
            const scaleHeight = CARD_HEIGHT / TEMPLATE_HEIGHT;
            const SCALE = Math.min(scaleWidth, scaleHeight);

            return (
              <div
                key={key}
                style={{
                  width: CARD_WIDTH,
                  height: CARD_HEIGHT,
                  borderRadius: "16px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "12px",
                }}
              >
                <div
                  style={{
                    width: CARD_WIDTH,
                    height: CARD_HEIGHT - 50, // leave space for buttons below
                    overflow: "hidden",
                    borderRadius: "12px",
                  }}
                >
                  <div
                    style={{
                      width: TEMPLATE_WIDTH,
                      height: TEMPLATE_HEIGHT,
                      transform: `scale(${SCALE})`,
                      transformOrigin: "top left",
                      pointerEvents: "none",
                      userSelect: "none",
                    }}
                  >
                    {resume.template === "template1" ? (
                      <Template1
                        data={resume}
                        width={TEMPLATE_WIDTH}
                        height={TEMPLATE_HEIGHT}
                      />
                    ) : resume.template === "template2" ? (
                      <Template2
                        data={resume}
                        width={TEMPLATE_WIDTH}
                        height={TEMPLATE_HEIGHT}
                      />
                    ) : (
                      <Template3
                        data={resume}
                        width={TEMPLATE_WIDTH}
                        height={TEMPLATE_HEIGHT}
                      />
                    )}
                  </div>
                </div>

                {/* Buttons  Delete and Update */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "8px",
                  }}
                >
                  <button
                    onClick={() => handleupdate(resume._id)}
                    style={{
                      flex: 1,
                      marginRight: "8px",
                      padding: "6px",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                      backgroundColor: "#4f46e5",
                      color: "white",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(resume._id)}
                    style={{
                      flex: 1,
                      padding: "6px",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                      backgroundColor: "#dc2626",
                      color: "white",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p
            style={{
              fontSize: "16px",
              color: "#64748b",
              fontStyle: "italic",
            }}
          >
            No resumes found. Click '+' to start building your first one.
          </p>
        )}
      </section>

      {error && (
        <p
          style={{
            color: "#dc2626",
            fontWeight: "500",
            marginTop: "24px",
          }}
        >
          {error}
        </p>
      )}
    </main>
  );
};
