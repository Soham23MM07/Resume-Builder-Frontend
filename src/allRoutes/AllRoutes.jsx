import { Routes, Route, Navigate } from "react-router-dom";
import { Landingpage } from "../pages/Landingpage";
import { Dashboard } from "../pages/Dashboard";
import SignInPage from "../auth/sign-in";
import { useUser } from "@clerk/clerk-react";
import { CreateResume } from "../pages/CreateResume";
import { useState } from "react";

export const AllRoutes = ({ setSign, sign }) => {
  const { isLoaded, isSignedIn } = useUser();
  const [resumeData, setResumeData] = useState([]);
  const [update, setUpdate] = useState("");
  const [updateData, setUpdateData] = useState({});
  const [template, setTemplate] = useState("template1");

  return (
    <main>
      <Routes>
        <Route
          path="/createresume"
          element={
            !isLoaded ? null : isSignedIn ? (
              <CreateResume
                template={template}
                setTemplate={setTemplate}
                updateData={updateData}
                setUpdateData={setUpdateData}
                resumeData={resumeData}
                update={update}
                setUpdate={setUpdate}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isLoaded && isSignedIn ? (
              <Dashboard
                updateData={updateData}
                setUpdateData={setUpdateData}
                resumeData={resumeData}
                setResumeData={setResumeData}
                update={update}
                setUpdate={setUpdate}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/"
          element={
            isLoaded && isSignedIn ? (
              <Navigate to="/dashboard" />
            ) : (
              <Landingpage sign={sign} setSign={setSign} />
            )
          }
        />
        <Route
          path="*"
          element={
            <Dashboard
              updateData={updateData}
              setUpdateData={setUpdateData}
              resumeData={resumeData}
              setResumeData={setResumeData}
              update={update}
              setUpdate={setUpdate}
            />
          }
        />
      </Routes>
    </main>
  );
};
