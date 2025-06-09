import React, { useState, useRef } from "react";

export const SkillInfo = ({
  step,
  handleBack,
  handleNext,
  handleAddResume,
  setData,
}) => {
  const [skills, setSkill] = useState({ name: "" });
  const hasClearedDefault = useRef(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSkill = { ...skills };

    setData((prev) => {
      const updatedSkills = hasClearedDefault.current
        ? [...prev.sections.skills, newSkill]
        : [newSkill];

      hasClearedDefault.current = true;

      return {
        ...prev,
        sections: {
          ...prev.sections,
          skills: updatedSkills,
        },
      };
    });

    setSkill({ name: "" }); // Clear the input
  };

  const handleChange = (e) => {
    setSkill({ name: e.target.value });
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
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          type="text"
          value={skills.name}
          onChange={handleChange}
          placeholder="Skill name"
          style={{
            marginBottom: "12px",
            padding: "8px",
            fontSize: "14px",
            borderRadius: "6px",
            border: "1px solid #d1d5db",
          }}
        />
        <button
          type="submit"
          style={{
            marginBottom: "20px",
            padding: "10px",
            backgroundColor: "#fbbf24",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: "600",
            color: "black",
          }}
        >
          Add Skill
        </button>
      </form>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
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
