import { useUser, UserButton } from "@clerk/clerk-react";

export const Header = ({ setSign }) => {
  const { isLoaded, isSignedIn } = useUser();

  return (
    <header
      className="min-h-[55px]"
      style={{
        width: "100%",
        height: "55px",
        padding: "0 24px",
        background: "linear-gradient(90deg, #1e3a8a, #2563eb)", // darker blue gradient
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        fontFamily: "'Poppins', sans-serif",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Left: Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          userSelect: "none",
        }}
      >
        <div
          style={{
            width: "27px",
            height: "27px",
            backgroundColor: "#2563eb", // strong blue circle
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "20px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          R
        </div>
        <h1
          style={{
            fontSize: "20px",
            fontWeight: "700",
            color: "white",
            letterSpacing: "0.5px",
            margin: 0,
            textShadow: "0 1px 2px rgba(0,0,0,0.3)", // subtle shadow for clarity
          }}
        >
          Resume Builder
        </h1>
      </div>

      {/* Right: User or Sign-in Button */}
      <div>
        {isLoaded && isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <button
            onClick={() => setSign(true)}
            style={{
              backgroundColor: "#1e40af", // darker blue button bg
              color: "#f9fafb", // almost white text
              padding: "5px 10px",
              borderRadius: "10px",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
              fontSize: "17px",
              boxShadow: "0 3px 8px rgba(30,64,175,0.5)", // blue tinted shadow
              transition: "background-color 0.3s ease",
              userSelect: "none",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#1e3a8a")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#1e40af")
            }
          >
            Log In / Sign Up
          </button>
        )}
      </div>
    </header>
  );
};
