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
    <section className="h-full grid place-items-center text-black">
      {" "}
      <form
        action=""
        onSubmit={handleRegister}
        className="h-[200px] flex flex-col justify-evenly items-center bg-slate-800 p-3 rounded-md"
      >
        <h1 className="text-green-500">Do Signup</h1>
        <input
          className="px-2 rounded-md"
          type="text"
          name="userName"
          id=""
          value={userName}
          onChange={handleInput}
          autoFocus
          placeholder="your name ..."
        />
        <input
          className="px-2 rounded-md"
          type="text"
          name="userEmail"
          id=""
          value={userEmail}
          onChange={handleInput}
          placeholder="your email ..."
        />
        <input
          className="px-2 rounded-md"
          type="text"
          name="userPass"
          id=""
          value={userPass}
          onChange={handleInput}
          placeholder="your password ..."
        />

          <button className="hover:bg-blue-800 hover:text-white bg-white text-black duration-500 px-3 rounded-md">
            signup
          </button>
      </form>
    </section>
  );
};

export default Signup;
