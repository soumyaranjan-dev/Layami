import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { PiPlaylistFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate()
  const handleHome = () => navigate("/dashboard")
  const handleExplore = () => navigate("/dashboard/explore")
  const handleList = () => navigate("/dashboard/playlist")
  return (
    <footer className="w-[60%] h-[50px] bg-transparent text-White backdrop-blur-lg flex items-center justify-between p-4 fixed z-10 rounded-lg bottom-4 left-1/4">
          <section>
            <FaHome size={20} onClick={handleHome}/>
          </section>
          <section>
            <FaSearch size={20} onClick={handleExplore}/>
          </section>
          <section>
            <PiPlaylistFill size={20} onClick={handleList}/>
          </section>
        </footer>
  )
}

export default Footer