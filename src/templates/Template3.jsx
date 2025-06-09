import React from "react";

export const Template3 = ({ data, reference, height, width }) => {
  return (
    <div
      style={{
        fontFamily: "Georgia, serif",
        backgroundColor: "#f9f6f1",
        height: height || "90vh",
        width: width || "90%",
        margin: "20px auto",
        padding: "30px 40px",
        borderRadius: "12px",
        boxShadow: "0 0 15px rgba(0,0,0,0.12)",
        color: "#333",
        overflowY: "auto",
      }}
      ref={reference}
    >
      {/* Profile Image Top */}
      <div
        style={{ textAlign: "center", marginBottom: "25px" }}
        className="flex flex-col items-center"
      >
        <img
          src={data.profileimageurl}
          alt="Profile"
          style={{
            width: 140,
            height: 140,
            borderRadius: "50%",
            objectFit: "cover",
            border: "5px solid #a67c00",
          }}
        />
        <h1
          style={{
            marginTop: "18px",
            marginBottom: "6px",
            fontSize: "28px",
            fontWeight: "bold",
            color: "#a67c00",
          }}
        >
          {data.basics.name}
        </h1>
        <p style={{ fontSize: "18px", fontStyle: "italic", margin: 0 }}>
          {data.title}
        </p>
      </div>

      {/* Contact Info */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "14px",
          color: "#555",
          lineHeight: "1.6",
        }}
      >
        <p>📧 {data.basics.email || "janedoe@email.com"}</p>
        <p>📞 {data.basics.phone || "+1 234 567 8901"}</p>
        <p>🔗 {data.basics.linkedIn || "linkedin.com/in/janedoe"}</p>
        <p>💻 {data.basics.gitHub || "github.com/janedoe"}</p>
      </div>

      {/* Summary */}
      <section style={{ marginBottom: "28px" }}>
        <h2
          style={{
            borderBottom: "3px solid #a67c00",
            paddingBottom: "6px",
            marginBottom: "12px",
          }}
        >
          Summary
        </h2>
        <p style={{ fontSize: "16px", color: "#444" }}>{data.basics.summary}</p>
      </section>

      {/* Experience */}
      <section style={{ marginBottom: "28px" }}>
        <h2
          style={{
            borderBottom: "3px solid #a67c00",
            paddingBottom: "6px",
            marginBottom: "12px",
          }}
        >
          Experience
        </h2>
        {data.sections.experience.length ? (
          data.sections.experience.map((exp, idx) => (
            <div key={idx} style={{ marginBottom: "16px" }}>
              <h3
                style={{
                  margin: "0 0 4px",
                  color: "#7a5c00",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                {exp.position || "Position"}
              </h3>
              <p
                style={{
                  margin: "0 0 4px",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#a67c00",
                }}
              >
                {exp.company || "Company Name"} | {exp.startDate} -{" "}
                {exp.endDate}
              </p>
              <p style={{ margin: 0, fontSize: "15px", color: "#555" }}>
                {exp.summary ||
                  "Description of responsibilities and achievements."}
              </p>
            </div>
          ))
        ) : (
          <p>No experience added</p>
        )}
      </section>

      {/* Education */}
      <section style={{ marginBottom: "28px" }}>
        <h2
          style={{
            borderBottom: "3px solid #a67c00",
            paddingBottom: "6px",
            marginBottom: "12px",
          }}
        >
          Education
        </h2>
        {data.sections.education.length ? (
          data.sections.education.map((edu, idx) => (
            <div key={idx} style={{ marginBottom: "16px" }}>
              <h3
                style={{
                  margin: "0 0 4px",
                  fontWeight: "bold",
                  fontSize: "17px",
                  color: "#7a5c00",
                }}
              >
                {edu.degree}
              </h3>
              <p
                style={{
                  margin: "0 0 4px",
                  fontSize: "14px",
                  color: "#a67c00",
                  fontWeight: "600",
                }}
              >
                {edu.institution} | {edu.startDate} - {edu.endDate}
              </p>
            </div>
          ))
        ) : (
          <p>No education added</p>
        )}
      </section>

      {/* Skills */}
      <section style={{ marginBottom: "28px" }}>
        <h2
          style={{
            borderBottom: "3px solid #a67c00",
            paddingBottom: "6px",
            marginBottom: "12px",
          }}
        >
          Skills
        </h2>
        {data.sections.skills.length ? (
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {data.sections.skills.map((skill, idx) => (
              <li
                key={idx}
                style={{
                  backgroundColor: "#a67c00",
                  color: "#fff",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                {skill.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No skills added</p>
        )}
      </section>

      {/* Projects */}
      <section style={{ marginBottom: "28px" }}>
        <h2
          style={{
            borderBottom: "3px solid #a67c00",
            paddingBottom: "6px",
            marginBottom: "12px",
          }}
        >
          Projects
        </h2>
        {data.sections.projects.length ? (
          data.sections.projects.map((proj, idx) => (
            <div key={idx} style={{ marginBottom: "16px" }}>
              <h3
                style={{
                  margin: "0 0 6px",
                  color: "#7a5c00",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                {proj.name || "Project Name"}
              </h3>
              <p style={{ margin: 0, fontSize: "15px", color: "#555" }}>
                {proj.description || "Brief description of the project."}
              </p>
            </div>
          ))
        ) : (
          <p>No projects added</p>
        )}
      </section>

      {/* Certifications */}
      <section>
        <h2
          style={{
            borderBottom: "3px solid #a67c00",
            paddingBottom: "6px",
            marginBottom: "12px",
          }}
        >
          Certifications
        </h2>
        {data.sections.certifications.length ? (
          data.sections.certifications.map((cert, idx) => (
            <div key={idx} style={{ marginBottom: "16px" }}>
              <h3
                style={{
                  margin: "0 0 4px",
                  fontWeight: "bold",
                  color: "#7a5c00",
                }}
              >
                {cert.name || "Certification Name"}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  color: "#a67c00",
                  fontWeight: "600",
                }}
              >
                {cert.issuer || "Issuer"} | {cert.date || "Date"}
              </p>
            </div>
          ))
        ) : (
          <p>No certifications added</p>
        )}
      </section>
    </div>
  );
};
