import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AllRoutes from "./components/routes/AllRoutes";

const App = () => {
  return <section className="bg-black text-white h-screen w-full">
    <AllRoutes />
  </section>
};

export default App;
