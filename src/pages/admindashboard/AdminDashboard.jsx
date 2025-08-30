import React from "react";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <section className="backdrop-blur-sm h-screen w-full duration-700">
      <Outlet />
    </section>
  );
};

export default AdminDashboard;
