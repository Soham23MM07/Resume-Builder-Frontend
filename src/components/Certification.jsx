import React, { useState, useRef } from "react";
import { Navigate } from "react-router-dom";
export const Certification = ({
  step,
  setData,
  handleAddResume,
  handleBack,
  handleNext,
}) => {
  const [certificate, setCertificate] = useState({
    name: "",
    issuer: "",
    date: "",
  });

  const hasClearedDefault = useRef(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCertificate = { ...certificate };

    setData((prev) => {
      const updatedCertifications = hasClearedDefault.current
        ? [...(prev.sections.certifications || []), newCertificate]
        : [newCertificate];

      hasClearedDefault.current = true;

      return {
        ...prev,
        sections: {
          ...prev.sections,
          certifications: updatedCertifications,
        },
      };
    });

    setCertificate({
      name: "",
      issuer: "",
      date: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCertificate((prev) => ({
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
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          type="text"
          value={certificate.name}
          name="name"
          onChange={handleChange}
          placeholder="Certificate Name"
          style={{
            marginBottom: "12px",
            padding: "8px",
            fontSize: "14px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          value={certificate.date}
          name="date"
          onChange={handleChange}
          placeholder="Date"
          style={{
            marginBottom: "12px",
            padding: "8px",
            fontSize: "14px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          value={certificate.issuer}
          name="issuer"
          onChange={handleChange}
          placeholder="Issuer"
          style={{
            marginBottom: "12px",
            padding: "8px",
            fontSize: "14px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "#fbbf24",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: "600",
            color: "black",
            marginBottom: "16px",
          }}
        >
          Add Certificate
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
