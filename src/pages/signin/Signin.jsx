import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signin = () => {
  const [formData, setFormData] = useState({
    userEmail: "",
    userPass: "",
  });
  const navigate = useNavigate();
  const { userEmail, userPass } = formData;
  // const token = import.meta.env.VITE_TOKEN

  const handleReset = () => {
    navigate("/reset")
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post(
        "http://localhost:8001/public/signin",
        formData
      );
      if (!data.token) {
        toast.error("no token received")
        return
      }
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
      
      setFormData({
        userEmail: "",
        userPass: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="h-screen grid place-items-center text-black duration-700 backdrop-blur-sm">
      <form
        action=""
        onSubmit={handleLogin}
        className="h-[200px] flex flex-col justify-evenly items-center bg-slate-800 p-3 rounded-md"
      >
        <h1 className="text-green-500 font-bold">Do Signin</h1>
        <input
          className="p-2 rounded-md text-sm"
          type="text"
          name="userEmail"
          id=""
          value={userEmail}
          onChange={handleInput}
          autoFocus
          placeholder="email ..."
        />
        <input
          className="p-2 rounded-md text-sm"
          type="text"
          name="userPass"
          id=""
          value={userPass}
          onChange={handleInput}
          placeholder="userPass ..."
        />
        <p className="text-[12px] text-white underline hover:text-blue-700 cursor-pointer" onClick={handleReset}>reset password</p>
        <button className="hover:bg-blue-800 hover:text-white bg-white text-black duration-500 px-3 rounded-md">
          signin
        </button>
      </form>
    </section>
  );
};

export default Signin;
