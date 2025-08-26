import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { PiPlaylistFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const handleHome = () => navigate("/dashboard");
  const handleExplore = () => navigate("/dashboard/explore");
  const handleList = () => navigate("/dashboard/playlist");
  return (
    <footer className="w-[60%] h-[50px] bg-white/10 text-White backdrop-blur-lg flex items-center justify-between p-4 fixed z-10 rounded-lg bottom-4 left-1/4">
      <section className="flex items-center justify-center">
        <p
          className="hidden md:block pr-2 font-bold cursor-pointer"
          onClick={handleHome}
        >
          Home
        </p>
        <FaHome size={20} onClick={handleHome} className="cursor-pointer" />
      </section>
      <section className="flex">
        <p
          className="hidden md:block pr-2 font-bold cursor-pointer"
          onClick={handleExplore}
        >
          Explore
        </p>
        <FaSearch
          size={20}
          onClick={handleExplore}
          className="cursor-pointer"
        />
      </section>
      <section className="flex">
        <p
          className="hidden md:block pr-2 font-bold cursor-pointer"
          onClick={handleList}
        >
          Playlist
        </p>
        <PiPlaylistFill
          size={20}
          onClick={handleList}
          className="cursor-pointer"
        />
      </section>
    </footer>
  );
};

export default Footer;
