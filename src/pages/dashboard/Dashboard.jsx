import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="backdrop-blur-sm h-screen w-full">
      <Outlet />
    </div>
  );
}

export default Dashboard