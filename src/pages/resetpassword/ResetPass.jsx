import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPass = () => {
  const [formdata, setFormdata] = useState(
    {
      userEmail: "",
      newPass: ""
    }
  )
  const navigate = useNavigate()
  const { userEmail, newPass } = formdata
  
  const handleReset = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:8001/public/updatePass", formdata)
      console.log(res)
      navigate("/signin")
    } catch (error) {
      console.log(error)
    }
    
  };
  
  const handleInput = (e) => {
    setFormdata({...formdata, [e.target.name]:e.target.value})
  }
  return (
    <section className="h-screen grid place-items-center text-black duration-700 backdrop-blur-sm">
      <form
        action=""
        onSubmit={handleReset}
        className="h-[200px] flex flex-col justify-evenly items-center bg-slate-800 p-3 rounded-md"
      >
        <h1 className="text-green-500 font-bold">Reset Password</h1>
        <input
          className="p-2 rounded-md text-sm"
          type="text"
          name="userEmail"
          id=""
          value={userEmail}
          onChange={handleInput}
          autoFocus
          placeholder="userEmail ..."
        />
        <input
          className="p-2 rounded-md text-sm"
          type="text"
          name="newPass"
          id=""
          value={newPass}
          onChange={handleInput}
          autoFocus
          placeholder="new pass ..."
        />
        <button className="hover:bg-blue-800 hover:text-white bg-white text-black duration-500 px-3 rounded-md">
          reset
        </button>
      </form>
    </section>
  );
};

export default ResetPass;
