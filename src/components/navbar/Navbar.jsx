import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogo = () => navigate("/dashboard");
  const handleProfile = () => navigate("/dashboard/profile");

  return (
    <nav className="w-[50%] h-[50px] bg-white/10 text-white backdrop-blur-lg flex items-center justify-between p-4 md:p-6 lg:p-7 fixed z-10 rounded-lg top-4 left-1/4">
      <section>
        <h1
          className="text-sm md:text-lg font-bold cursor-pointer"
          onClick={handleLogo}
        >
          Layami
        </h1>
      </section>
      <section className="flex">
        <p
          className="hidden md:block pr-2 font-bold cursor-pointer"
          onClick={handleProfile}
        >
          Profile
        </p>
        <FaUserCircle
          size={20}
          onClick={handleProfile}
          className="cursor-pointer"
        />
      </section>
    </nav>
  );
};

export default Navbar;
