import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPass: "",
  });

  const { userName, userEmail, userPass } = formData;

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("registered", "true");
    localStorage.setItem("users", JSON.stringify(formData));
    setFormData({
      userName: "",
      userEmail: "",
      userPass: "",
    });
    setTimeout(() => {
      navigate("/signin")
    },1000)
  };

  return (
    <section className="h-screen grid place-items-center text-black backdrop-blur-sm">
      {" "}
      <form
        action=""
        onSubmit={handleRegister}
        className="h-auto flex flex-col justify-evenly items-center bg-slate-800 p-3 rounded-md space-y-2"
      >
        <h1 className="text-green-500 font-bold text-sm">Do Signup</h1>
        <input
          className="p-2 rounded-md text-sm"
          type="text"
          name="userName"
          id=""
          value={userName}
          onChange={handleInput}
          autoFocus
          placeholder="your name ..."
        />
        <input
          className="p-2 rounded-md text-sm"
          type="text"
          name="userEmail"
          id=""
          value={userEmail}
          onChange={handleInput}
          placeholder="your email ..."
        />
        <input
          className="p-2 rounded-md text-sm"
          type="text"
          name="userPass"
          id=""
          value={userPass}
          onChange={handleInput}
          placeholder="your password ..."
        />

        <button className="hover:bg-blue-800 hover:text-white bg-white text-black duration-500 p-2 rounded-md">
          signup
        </button>
      </form>
    </section>
  );
};

export default Signup;
