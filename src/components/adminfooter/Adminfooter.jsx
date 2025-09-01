import React from 'react'
import { FaHome } from 'react-icons/fa';
import { IoIosAddCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Adminfooter = () => {
    const navigate = useNavigate()
  return (
    <footer className="w-[40%] h-[50px] bg-white/10 text-White backdrop-blur-lg flex items-center justify-between p-4 fixed z-10 rounded-lg bottom-4 left-1/3">
      <section className="flex items-center justify-center">
        <p
          className="hidden md:block pr-2 font-bold cursor-pointer"
          onClick={() => navigate("")}
        >
          Home
        </p>
        <FaHome
          size={20}
          onClick={() => navigate("")}
          className="cursor-pointer"
        />
      </section>
      <section className="flex">
        <p
          className="hidden md:block pr-2 font-bold cursor-pointer"
          onClick={() => {
            navigate("/admindashboard/addsong");
          }}
        >
          AdD Song
        </p>
        <IoIosAddCircle
          size={20}
          className="cursor-pointer"
          onClick={() => {
            navigate("/admindashboard/addsong");
          }}
        />
      </section>
    </footer>
  );
}

export default Adminfooter