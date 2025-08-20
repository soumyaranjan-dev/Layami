import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="backdrop-blur-sm h-screen w-full duration-700">
      <Outlet />
    </div>
  );
}

export default Dashboard