import { useState, useRef } from "react";

export const Projects = ({
  step,
  setData,
  handleAddResume,
  handleBack,
  handleNext,
}) => {
  const [project, setProject] = useState({
    name: "",
    description: "",
    link: "",
  });

  // Track if default projects are cleared or not (like SkillInfo)
  const hasClearedDefault = useRef(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = { ...project };

    setData((prev) => {
      const updatedProjects = hasClearedDefault.current
        ? [...(prev.sections.projects || []), newProject]
        : [newProject]; // Replace default on first add

      hasClearedDefault.current = true;

      return {
        ...prev,
        sections: {
          ...prev.sections,
          projects: updatedProjects,
        },
      };
    });

    setProject({
      name: "",
      description: "",
      link: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "20px",
        boxSizing: "border-box",
        backgroundColor: "#fff",
      }}
    >
      <h3>Projects</h3>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <input
          type="text"
          name="name"
          value={project.name}
          onChange={handleChange}
          placeholder="Project Name"
          style={{
            padding: "8px",
            fontSize: "14px",
            borderRadius: "6px",
            border: "1px solid #d1d5db",
          }}
        />
        <textarea
          name="description"
          value={project.description}
          onChange={handleChange}
          placeholder="Project Description"
          rows={4}
          style={{
            padding: "8px",
            fontSize: "14px",
            borderRadius: "6px",
            border: "1px solid #d1d5db",
          }}
        />
        <input
          type="text"
          name="link"
          value={project.link}
          onChange={handleChange}
          placeholder="Project Link"
          style={{
            padding: "8px",
            fontSize: "14px",
            borderRadius: "6px",
            border: "1px solid #d1d5db",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#fbbf24",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: "600",
            color: "black",
          }}
        >
          Add Project
        </button>
      </form>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {step > 1 && (
          <button
            onClick={handleBack}
            style={{
              padding: "8px 14px",
              backgroundColor: "#e5e7eb",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Back
          </button>
        )}

        {step < 6 ? (
          <button
            onClick={handleNext}
            style={{
              padding: "8px 14px",
              backgroundColor: "#fbbf24",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              fontWeight: "600",
              color: "black",
            }}
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleAddResume}
            style={{
              padding: "8px 14px",
              backgroundColor: "#22c55e",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              fontWeight: "600",
              color: "white",
            }}
          >
            Finish
          </button>
        )}
      </div>
    </div>
  );
};
