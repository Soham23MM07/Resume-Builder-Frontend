import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicInfoForm from "../components/BasicInfo";
import Logo from "../assets/avatar-icon.jpg";
import { ExperienceInfo } from "../components/ExperienceInfo";
import { SkillInfo } from "../components/SkillInfo";
import { Education } from "../components/Education";
import { Projects } from "../components/Projects";
import { ResumePreview } from "../components/ResumePreview";
import { Certification } from "../components/Certification";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import toast from "react-hot-toast";

export const CreateResume = ({
  updateData,
  template,
  setTemplate,
  update,
  setUpdate,
}) => {
  const { getToken } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [color, setColor] = useState("#fbbf24");
  const resumeRef = useRef();
  const [data, setData] = useState();

  const handleDownload = async (ref) => {
    if (!ref.current) return;

    const originalStyle = {
      height: ref.current.style.height,
      overflow: ref.current.style.overflow,
    };

    ref.current.style.height = "auto";
    ref.current.style.overflow = "visible";

    const canvas = await html2canvas(ref.current, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    const scaleRatio = pdfHeight / imgHeight;

    const scaledWidth = imgWidth * scaleRatio;
    const scaledHeight = imgHeight * scaleRatio;

    const xOffset = (pdfWidth - scaledWidth) / 2;
    const yOffset = 0;

    pdf.addImage(imgData, "PNG", xOffset, yOffset, scaledWidth, scaledHeight);
    pdf.save("resume.pdf");

    ref.current.style.height = originalStyle.height;
    ref.current.style.overflow = originalStyle.overflow;

    window.location.reload();
  };

  const handleUpdate = async (id) => {
    const token = await getToken();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/resume/${id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console.log(response);
      toast.success("Resume Updated Successfully");
    } catch (error) {
      console.log(error.message);
    } finally {
      setUpdate("");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  };

  useEffect(() => {
    const initialResumeData = {
      title: "Senior Software Engineer",
      profileimageurl: Logo,
      template: template,
      basics: {
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "+1 (555) 123-4567",
        linkedIn: "linkedin.com/in/johndoe",
        gitHub: "github.com/johndoe",
        rollno: "",
        summary:
          "Experienced Software Engineer with a strong background in full-stack development, team leadership, and delivering quality solutions.",
      },
      sections: {
        education: [
          {
            institution: "University of Technology",
            degree: "B.Sc. in Computer Science",
            startDate: "2013",
            endDate: "2017",
          },
        ],
        experience: [
          {
            company: "Tech Solutions Inc.",
            position: "Senior Software Engineer",
            organisation: "Udemy",
            location: "Work from Home",
            startDate: "Jan 2020",
            endDate: "Present",
            summary:
              "Led the development of scalable web applications and improved system performance by 30%.",
          },
          {
            company: "Creative Apps LLC",
            position: "Frontend Developer",
            startDate: "Jun 2017",
            endDate: "Dec 2019",
            summary:
              "Developed user-friendly interfaces and collaborated closely with UX designers.",
          },
        ],
        skills: [{ name: "javascript" }],
        projects: [
          {
            name: "Portfolio Website",
            description:
              "Created a responsive personal portfolio website showcasing projects and skills.",
          },
          {
            name: "E-commerce Platform",
            description:
              "Built a scalable online store with integrated payment gateway and user reviews.",
          },
        ],
        certifications: [
          {
            name: "Certified React Developer",
            issuer: "React Training Institute",
            date: "2022",
          },
          {
            name: "AWS Solutions Architect",
            issuer: "Amazon Web Services",
            date: "2021",
          },
        ],
        additionalDetails: [],
      },
    };

    console.log("Soham", updateData);

    if (update !== "") {
      setData(updateData);
    } else {
      setData(initialResumeData);
    }
  }, []);

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };
  const handleNext = () => {
    setStep((prev) => prev + 1);
  };
  const handleAddResume = async () => {
    const token = await getToken();
    console.log(data);
    console.log(token);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/resume`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Add Resume Response:", response.data);
      toast.success("Resume Created Successfully");
    } catch (error) {
      console.error("Error adding resume:", error.message);
    } finally {
      navigate("/dashboard");
    }
  };

  const renderInfo = () => {
    switch (step) {
      case 1:
        return (
          <BasicInfoForm
            data={data}
            setData={setData}
            step={step}
            handleBack={handleBack}
            handleNext={handleNext}
            handleAddResume={handleAddResume}
            template={template}
            setColor={setColor}
            color={color}
            setTemplate={setTemplate}
          />
        );
      case 2:
        return (
          <ExperienceInfo
            data={data}
            setData={setData}
            step={step}
            handleBack={handleBack}
            handleNext={handleNext}
            handleAddResume={handleAddResume}
          />
        );
      case 3:
        return (
          <SkillInfo
            data={data}
            setData={setData}
            step={step}
            handleBack={handleBack}
            handleNext={handleNext}
            handleAddResume={handleAddResume}
          />
        );
      case 4:
        return (
          <Education
            data={data}
            setData={setData}
            step={step}
            handleBack={handleBack}
            handleNext={handleNext}
            handleAddResume={handleAddResume}
          />
        );
      case 5:
        return (
          <Projects
            data={data}
            setData={setData}
            step={step}
            handleBack={handleBack}
            handleNext={handleNext}
            handleAddResume={handleAddResume}
          />
        );
      case 6:
        return (
          <Certification
            data={data}
            update={update}
            setData={setData}
            setUpdate={setUpdate}
            step={step}
            handleBack={handleBack}
            handleNext={handleNext}
            handleAddResume={handleAddResume}
          />
        );
      default:
    }
  };

  return (
    <div
      className="w-full min-h-[86vh] flex bg-gray-100 px-4 py-6 gap-4"
      style={{ padding: "6rem 7rem" }}
    >
      {/* Input Fields */}
      <section
        style={{ padding: "2rem 1rem" }}
        className="w-[40%] bg-white rounded-2xl shadow-md overflow-y-auto h-full "
      >
        {data ? renderInfo() : <p className="text-gray-600">Loading form...</p>}
        {update && (
          <button
            onClick={() => handleUpdate(update)}
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
            Update
          </button>
        )}
      </section>

      {/* Live Preview  */}
      <section className="w-[60%] flex flex-col items-center gap-4">
        <div className="w-full max-h-[90vh] overflow-auto">
          {data ? (
            <ResumePreview
              data={data}
              template={data.template || template}
              setColor={setColor}
              color={color}
              setTemplate={setTemplate}
              reference={resumeRef}
              handleDownload={handleDownload}
            />
          ) : (
            <p className="text-gray-600">Loading preview...</p>
          )}
        </div>
        <button
          style={{ padding: "7px 7px" }}
          className="mt-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          onClick={() => handleDownload(resumeRef)}
        >
          📥 Download
        </button>
      </section>
    </div>
  );
};
