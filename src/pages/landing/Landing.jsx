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
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Welcome to My App 🤕</h1>
      <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition" onClick={goToDest}>
        Get Started
      </button>
    </div>
  );
};

export default Landing;
