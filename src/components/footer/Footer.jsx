import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { PiPlaylistFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="w-[60%] h-[50px] bg-transparent text-White backdrop-blur-lg flex items-center justify-between p-4 fixed z-10 rounded-lg bottom-4 left-1/4">
          <section>
            <FaHome size={20}/>
          </section>
          <section>
            <FaSearch size={20}/>
          </section>
          <section>
            <PiPlaylistFill size={20}/>
          </section>
        </footer>
  )
}

export default Footer