import { useState, useRef } from "react";

export const Education = ({
  step,
  handleBack,
  handleAddResume,
  handleNext,
  setData,
}) => {
  const [edu, setEdu] = useState({
    institution: "",
    degree: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    grade: "",
    description: "",
  });

  const hasClearedDefault = useRef(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdu((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEducation = { ...edu };

    setData((prev) => {
      
      const updatedEducation = hasClearedDefault.current
        ? [...(prev.sections.education || []), newEducation]
        : [newEducation];

      hasClearedDefault.current = true;

      return {
        ...prev,
        sections: {
          ...prev.sections,
          education: updatedEducation,
        },
      };
    });

    setEdu({
      institution: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      grade: "",
      description: "",
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
        Education
      </div>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        {[
          { name: "institution", type: "text", placeholder: "Institution" },
          { name: "degree", type: "text", placeholder: "Degree" },
          { name: "fieldOfStudy", type: "text", placeholder: "Field of Study" },
          { name: "grade", type: "text", placeholder: "Grade" },
          { name: "description", type: "text", placeholder: "Description" },
          { name: "startDate", type: "date", placeholder: "Start Date" },
          { name: "endDate", type: "date", placeholder: "End Date" },
        ].map(({ name, type, placeholder }) => (
          <input
            type={type}
            key={name}
            name={name}
            placeholder={placeholder}
            value={edu[name]}
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
          Add Education
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
