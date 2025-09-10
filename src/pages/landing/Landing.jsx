import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate()

  const goToDest = () => {
    const isRegistered = localStorage.getItem("registered")
    if (isRegistered) {
      // already registered
      navigate("/signin")
    } else {
      // new register
      navigate("/signup")
    }
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen backdrop-blur-sm">
      <h1 className="text-small p-2 font-bold mb-6 text-white">
        Layami Awaits You 🪶
      </h1>
      <button
        className="px-2 py-2 bg-blue-600 text-white hover:text-black text-small font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        onClick={goToDest}
      >
        Get Started
      </button>
    </div>
  );
};

export default Landing;
