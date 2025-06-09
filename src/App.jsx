import { useState } from "react";
import { AllRoutes } from "./allRoutes/AllRoutes";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Toaster } from "react-hot-toast";

function App() {
  const [sign, setSign] = useState(false);

  return (
    <div className="min-h-[100vh] flex flex-col bg-gray-50 text-gray-900">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            fontSize: "16px",
            borderRadius: "8px",
            color: "#fff",
            padding: "8px 10px",
          },
          success: {
            duration: 4000,
            style: {
              background: "green",
            },
          },
          error: {
            duration: 4000,
            style: {
              background: "red",
            },
          },
        }}
      />
      <Header sign={sign} setSign={setSign} />
      <main className="flex-grow px-4 py-6 min-h-[86vh]">
        <AllRoutes sign={sign} setSign={setSign} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
