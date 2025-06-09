import React from "react";

export const Template2 = ({ data, reference, height, width }) => {
  return (
    <div
      ref={reference}
      style={{
        display: "flex",
        fontFamily: "Georgia, serif",
        width,
        height,
        margin: "auto",
        boxShadow: "0 0 12px rgba(0,0,0,0.15)",
        overflow: "hidden",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Left Sidebar */}
      <div
        style={{
          backgroundColor: "#d8ecf3",
          width: "30%",
          padding: "30px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "#333",
        }}
      >
        <img
          src={data.profileimageurl}
          alt={data.basics.name || "Profile"}
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "20px",
            border: "4px solid #ffffff",
          }}
        />
        <h2 style={{ marginBottom: "5px", textAlign: "center" }}>
          {data.basics.name}
        </h2>
        <p style={{ color: "#555", marginBottom: "20px", textAlign: "center" }}>
          {data.title}
        </p>

        <div style={{ fontSize: "14px", width: "100%", marginBottom: "20px" }}>
          <p>📧 {data.basics.email}</p>
          <p>📞 {data.basics.phone}</p>
          <p>🔗 {data.basics.linkedIn}</p>
          <p>💻 {data.basics.gitHub}</p>
        </div>

        {/* Skills */}
        <div style={{ width: "100%", marginBottom: "20px" }}>
          <h3 style={subHeading}>Skills</h3>
          <ul style={{ paddingLeft: "20px", margin: 0 }}>
            {data.sections.skills.map((skill, idx) => (
              <li key={idx} style={{ fontSize: "14px", marginBottom: "5px" }}>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications */}
        <div style={{ width: "100%" }}>
          <h3 style={subHeading}>Certifications</h3>
          {data.sections.certifications.map((cert, idx) => (
            <div key={idx} style={{ marginBottom: "10px" }}>
              <strong style={{ fontSize: "14px" }}>{cert.name}</strong>
              <p style={{ fontSize: "12px", color: "#666" }}>
                {cert.issuer} | {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Main Content */}
      <div
        style={{
          width: "70%",
          padding: "40px",
          overflowY: "auto",
        }}
      >
        {/* Profile Summary */}
        <Section title="Profile">
          <p style={paragraph}>{data.basics.summary}</p>
        </Section>

        {/* Education */}
        <Section title="Education">
          {data.sections.education.map((edu, idx) => (
            <div key={idx} style={{ marginBottom: "15px" }}>
              <strong style={{ fontSize: "15px" }}>{edu.degree}</strong>
              <p style={subText}>
                {edu.institution} | {edu.startDate} - {edu.endDate}
              </p>
            </div>
          ))}
        </Section>

        {/* Work Experience */}
        <Section title="Work Experience">
          {data.sections.experience.map((exp, idx) => (
            <div key={idx} style={{ marginBottom: "15px" }}>
              <strong style={{ fontSize: "15px" }}>{exp.position}</strong> at{" "}
              {exp.company}
              <p style={subText}>
                {exp.startDate} - {exp.endDate}
              </p>
              <p style={paragraph}>{exp.summary}</p>
            </div>
          ))}
        </Section>

        {/* Projects */}
        <Section title="Projects">
          {data.sections.projects.map((proj, idx) => (
            <div key={idx} style={{ marginBottom: "15px" }}>
              <strong style={{ fontSize: "15px" }}>{proj.name}</strong>
              <p style={paragraph}>{proj.description}</p>
            </div>
          ))}
        </Section>
      </div>
    </div>
  );
};

// Section Component
const Section = ({ title, children }) => (
  <section style={{ marginBottom: "25px" }}>
    <h2 style={sectionHeading}>{title}</h2>
    {children}
  </section>
);

// Styles
const sectionHeading = {
  fontSize: "20px",
  marginBottom: "10px",
  color: "#2c3e50",
  borderBottom: "2px solid #3498db",
  paddingBottom: "4px",
};

const subHeading = {
  borderBottom: "1px solid #aaa",
  marginBottom: "10px",
  fontSize: "16px",
};

const subText = {
  fontSize: "13px",
  color: "#777",
  marginBottom: "4px",
};

const paragraph = {
  fontSize: "14px",
  color: "#333",
};
