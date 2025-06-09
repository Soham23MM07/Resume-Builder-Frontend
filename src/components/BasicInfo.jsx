import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect, useState } from "react";

const BasicInfoForm = ({
  data,
  setData,
  step,
  handleBack,
  handleNext,
  handleAddResume,
  template,
  setTemplate,
}) => {
  const { getToken } = useAuth();
  const [file, setFile] = useState(null);

  const handletemplate = (temp) => {
    setTemplate(temp);
    {
      setData((prev) => ({
        ...prev,
        template: temp,
      }));
    }
  };

  useEffect(() => {
    const uploadImage = async () => {
      if (!file) return;
      try {
        const token = await getToken();
        console.log(token);

        const formData = new FormData();
        formData.append("avatar", file);

        const response = await axios.post(
          "http://localhost:3000/api/resume/uploadimage",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Data return", response.data.data);

        setData((prev) => ({
          ...prev,
          profileimageurl: response.data.data,
        }));
      } catch (err) {
        console.error("Upload failed:", err);
      }
    };

    uploadImage();
  }, [file, getToken]);

  return (
    <div
      style={{
        width: "100%",
        padding: "10px 10px",
        boxSizing: "border-box",
        backgroundColor: "#fff",
        borderRadius: "12px",
      }}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "16px",
            color: "#000",
          }}
        >
          Personal Information
        </h2>

        <label
          style={{ marginBottom: "6px", fontWeight: "600", color: "#000" }}
        >
          Upload Profile Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          style={{
            marginBottom: "12px",
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        />

        <label
          style={{ marginBottom: "6px", fontWeight: "600", color: "#000" }}
        >
          Title
        </label>
        <select
          name="title"
          value={data.title}
          onChange={(e) =>
            setData((prev) => ({ ...prev, title: e.target.value }))
          }
          style={{
            marginBottom: "12px",
            padding: "8px",
            fontSize: "14px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >
          <option value="">Select a Title</option>
          <option value="UI/UX Developer">UI/UX Developer</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Data Analyst">Data Analyst</option>
          <option value="Project Manager">Project Manager</option>
          <option value="Mobile App Developer">Mobile App Developer</option>
          <option value="Graphic Designer">Graphic Designer</option>
          <option value="DevOps Engineer">DevOps Engineer</option>
        </select>

        {[
          { name: "name", placeholder: "Name" },
          { name: "email", placeholder: "Email" },
          { name: "phone", placeholder: "Phone" },
          { name: "linkedIn", placeholder: "LinkedIn Profile Link" },
          { name: "gitHub", placeholder: "GitHub Profile Link" },
        ].map((field) => (
          <input
            key={field.name}
            name={field.name}
            placeholder={field.placeholder}
            value={data.basics[field.name]}
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                basics: {
                  ...prev.basics,
                  [field.name]: e.target.value,
                },
              }))
            }
            style={{
              marginBottom: "12px",
              padding: "8px",
              fontSize: "14px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        ))}

        <textarea
          name="summary"
          placeholder="Professional Summary"
          value={data.basics.summary}
          onChange={(e) =>
            setData((prev) => ({
              ...prev,
              basics: {
                ...prev.basics,
                summary: e.target.value,
              },
            }))
          }
          style={{
            marginBottom: "12px",
            padding: "8px",
            fontSize: "14px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            minHeight: "100px",
            resize: "vertical",
          }}
        />

        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {
            <div style={{ marginBottom: 20 }}>
              <h3>Select Template</h3>
              <div style={{ display: "flex", gap: 10 }}>
                {["template1", "template2", "template3"].map((temp) => (
                  <div
                    key={temp}
                    onClick={() => handletemplate(temp)}
                    style={{
                      cursor: "pointer",
                      border:
                        temp === template
                          ? "3px solid #fbbf24"
                          : "1px solid #ccc",
                      padding: 8,
                      borderRadius: 6,
                      userSelect: "none",
                    }}
                  >
                    {temp}
                  </div>
                ))}
              </div>
            </div>
          }
          {step > 1 && (
            <button
              onClick={handleBack}
              type="button"
              style={{
                padding: "8px 14px",
                backgroundColor: "#e5e7eb", // gray-200
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
                fontWeight: "600",
                color: "#000",
              }}
            >
              Back
            </button>
          )}

          {step < 6 ? (
            <button
              type="button"
              onClick={handleNext}
              style={{
                padding: "10px 12px",
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
              type="button"
              onClick={handleAddResume}
              style={{
                padding: "8px 14px",
                backgroundColor: "#22c55e", // green-500
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
      </form>
    </div>
  );
};

export default BasicInfoForm;
