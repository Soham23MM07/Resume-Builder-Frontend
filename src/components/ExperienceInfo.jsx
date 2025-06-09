import React, { useState, useRef } from "react";

export const ExperienceInfo = ({
  step,
  setData,
  handleBack,
  handleNext,
  handleAddResume,
}) => {
  const [experienceinfo, setExperience] = useState({
    company: "",
    position: "",
    organization: "",
    location: "",
    startDate: "",
    endDate: "",
    summary: "",
  });

  const hasClearedDefault = useRef(false); // persists across re-renders

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!experienceinfo.company || !experienceinfo.position) {
      alert("Please fill at least the Company and Position fields.");
      return;
    }

    const newExperience = { ...experienceinfo };

    // Debug log to verify data before setting
    console.log("Submitting new experience:", newExperience);

    setData((prev) => {
      const updatedExperience = hasClearedDefault.current
        ? [...(prev.sections?.experience || []), newExperience]
        : [newExperience];

      hasClearedDefault.current = true;

      // Debug log to verify data after update
      console.log("Updated parent data with experience:", updatedExperience);

      return {
        ...prev,
        sections: {
          ...prev.sections,
          experience: updatedExperience,
        },
      };
    });

    // Clear form inputs after add
    setExperience({
      company: "",
      position: "",
      organization: "",
      location: "",
      startDate: "",
      endDate: "",
      summary: "",
    });
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
      <div
        style={{
          fontWeight: "700",
          fontSize: "20px",
          marginBottom: "16px",
          color: "#1f2937",
        }}
      >
        Experience
      </div>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        {[
          { name: "position", placeholder: "Position" },
          { name: "company", placeholder: "Company" },
          { name: "organization", placeholder: "Organization" },
          { name: "location", placeholder: "Location" },
        ].map((field) => (
          <input
            key={field.name}
            name={field.name}
            type="text"
            placeholder={field.placeholder}
            value={experienceinfo[field.name]}
            onChange={handleChange}
            style={{
              marginBottom: "12px",
              padding: "8px",
              fontSize: "14px",
              borderRadius: "6px",
              border: "1px solid #d1d5db",
            }}
          />
        ))}

        <input
          name="startDate"
          type="date"
          value={experienceinfo.startDate}
          onChange={handleChange}
          style={{
            marginBottom: "12px",
            padding: "8px",
            fontSize: "14px",
            borderRadius: "6px",
            border: "1px solid #d1d5db",
          }}
        />

        <input
          name="endDate"
          type="date"
          value={experienceinfo.endDate}
          onChange={handleChange}
          style={{
            marginBottom: "12px",
            padding: "8px",
            fontSize: "14px",
            borderRadius: "6px",
            border: "1px solid #d1d5db",
          }}
        />

        <textarea
          name="summary"
          placeholder="Summary"
          value={experienceinfo.summary}
          onChange={handleChange}
          style={{
            marginBottom: "12px",
            padding: "8px",
            fontSize: "14px",
            borderRadius: "6px",
            border: "1px solid #d1d5db",
            minHeight: "80px",
            resize: "vertical",
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
          Add Experience
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
