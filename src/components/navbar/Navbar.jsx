import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const handleLogo = () => {
    navigate("/dashboard")
  }
  return (
    <nav className="w-[60%] h-[50px] bg-transparent text-black backdrop-blur-lg flex items-center justify-between p-4 fixed z-10 rounded-lg top-4 left-1/4">
      <section>
        <h1 className="text-sm font-bold cursor-pointer" onClick={handleLogo}>Layami</h1>
      </section>
      <section>
        <FaUserCircle size={20}/>
      </section>
    </nav>
  );
};

export default Navbar;
