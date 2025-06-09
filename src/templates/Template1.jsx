import Logo from "../assets/avatar-icon.jpg";

const iconStyle = { marginRight: "8px", color: "#2563eb" };

export const Template1 = ({ data, width, height, reference }) => {
  const {
    basics = {},
    title = "Your Title",
    profileimageurl,
    sections = {
      experience: [],
      education: [],
      skills: [],
      projects: [],
      certifications: [],
    },
  } = data || {};

  const renderSectionTitle = (text) => (
    <h2
      style={{
        borderLeft: "4px solid #2563eb",
        paddingLeft: "12px",
        marginBottom: "16px",
        fontWeight: "700",
        fontSize: "20px",
        color: "#0f172a",
      }}
    >
      {text}
    </h2>
  );

  return (
    <div
      ref={reference}
      style={{
        backgroundColor: "#ffffff",
        padding: "40px 50px",
        borderRadius: "16px",
        marginLeft: "20px",
        height: height || "90vh",
        width: width || "95%",
        boxShadow: "0 0 24px rgba(0, 0, 0, 0.08)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#1e293b",
        overflowY: "auto",
      }}
    >
      {/* Header */}
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "32px" }}
      >
        <img
          src={profileimageurl || Logo}
          alt="Profile"
          style={{
            width: 110,
            height: 110,
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: "24px",
            border: "2px solid #2563eb",
          }}
        />
        <div>
          <h1 style={{ fontSize: "30px", fontWeight: "700", margin: 0 }}>
            {basics.name || "John Doe"}
          </h1>
          <p
            style={{
              color: "#2563eb",
              fontWeight: "600",
              fontSize: "18px",
              marginTop: "4px",
            }}
          >
            {title}
          </p>
          <div
            style={{
              marginTop: "10px",
              fontSize: "14px",
              color: "#475569",
              lineHeight: "1.6",
            }}
          >
            {basics.email && (
              <p>
                <span style={iconStyle}>📧</span>
                {basics.email}
              </p>
            )}
            {basics.phone && (
              <p>
                <span style={iconStyle}>📞</span>
                {basics.phone}
              </p>
            )}
            {basics.linkedIn && (
              <p>
                <span style={iconStyle}>🔗</span>
                <a
                  href={`https://${basics.linkedIn}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#2563eb", textDecoration: "none" }}
                >
                  {basics.linkedIn}
                </a>
              </p>
            )}
            {basics.gitHub && (
              <p>
                <span style={iconStyle}>💻</span>
                <a
                  href={`https://${basics.gitHub}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#2563eb", textDecoration: "none" }}
                >
                  {basics.gitHub}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Summary */}
      {basics.summary && (
        <section style={{ marginBottom: "30px" }}>
          {renderSectionTitle("Professional Summary")}
          <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#334155" }}>
            {basics.summary}
          </p>
        </section>
      )}

      {/* Work Experience */}
      {sections.experience.length > 0 && (
        <section style={{ marginBottom: "30px" }}>
          {renderSectionTitle("Work Experience")}
          {sections.experience.map((job, index) => (
            <div key={index} style={{ marginBottom: "16px" }}>
              <h3 style={{ fontSize: "17px", fontWeight: "600", margin: 0 }}>
                {job.position} @ {job.organization}
              </h3>
              <p
                style={{ color: "#475569", fontSize: "14px", margin: "4px 0" }}
              >
                {job.company} | {job.startDate} – {job.endDate}
              </p>
              <p style={{ color: "#334155", fontSize: "15px" }}>
                {job.summary}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {sections.education.length > 0 && (
        <section style={{ marginBottom: "30px" }}>
          {renderSectionTitle("Education")}
          {sections.education.map((edu, index) => (
            <div key={index} style={{ marginBottom: "14px" }}>
              <h3 style={{ fontSize: "17px", fontWeight: "600", margin: 0 }}>
                {edu.degree}
              </h3>
              <p
                style={{ color: "#475569", fontSize: "14px", margin: "4px 0" }}
              >
                {edu.institution} | {edu.startDate} – {edu.endDate}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {sections.skills.length > 0 && (
        <section style={{ marginBottom: "30px" }}>
          {renderSectionTitle("Skills")}
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            {sections.skills.map((skill, index) => (
              <li
                key={index}
                style={{
                  background: "#e0e7ff",
                  color: "#1e40af",
                  padding: "6px 12px",
                  borderRadius: "12px",
                  margin: "4px 8px 4px 0",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                {skill.name}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Projects */}
      {sections.projects.length > 0 && (
        <section style={{ marginBottom: "30px" }}>
          {renderSectionTitle("Projects")}
          {sections.projects.map((project, index) => (
            <div key={index} style={{ marginBottom: "14px" }}>
              <h3
                style={{
                  fontSize: "17px",
                  fontWeight: "600",
                  color: "#1e40af",
                  margin: 0,
                }}
              >
                {project.name}
              </h3>
              <p style={{ fontSize: "15px", color: "#334155" }}>
                {project.description}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Certifications */}
      {sections.certifications.length > 0 && (
        <section>
          {renderSectionTitle("Certifications")}
          {sections.certifications.map((cert, index) => (
            <div key={index} style={{ marginBottom: "14px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "600", margin: 0 }}>
                {cert.name}
              </h3>
              <p
                style={{ color: "#475569", fontSize: "14px", margin: "4px 0" }}
              >
                {cert.issuer} | {cert.date}
              </p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};
