import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const [formData, setFormData] = useState(
    {
      userEmail: "",
      userPass:""
    }
  )
  const navigate = useNavigate()
  const {userEmail, userPass} = formData
  const token = import.meta.env.VITE_TOKEN

  
  const handleLogin = (e) => {
    e.preventDefault();
    const registeredUser = JSON.parse(localStorage.getItem("users"))
    console.log(registeredUser)
    if(!userEmail || !userPass || registeredUser.userEmail !== userEmail || registeredUser.userPass !== userPass) return
    
    localStorage.setItem("token", JSON.stringify(token))
    navigate("/dashboard")    
  }

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="h-full grid place-items-center text-black duration-700">
      <form
        action=""
        onSubmit={handleLogin}
        className="h-[200px] flex flex-col justify-evenly items-center bg-slate-800 p-3 rounded-md"
      >
        <h1 className="text-green-500">Do Signin</h1>
        <input
          className="px-2 rounded-md"
          type="text"
          name="userEmail"
          id=""
          value={userEmail}
          onChange={handleInput}
          autoFocus
          placeholder='email ...'
          />
        <input
          className="px-2 rounded-md"
          type="text"
          name="userPass"
          id=""
          value={userPass}
          onChange={handleInput}
          placeholder='password ...'
        />

        <button className="hover:bg-blue-800 hover:text-white bg-white text-black duration-500 px-3 rounded-md">
          signin
        </button>
      </form>
    </section>
  );
}

export default Signin