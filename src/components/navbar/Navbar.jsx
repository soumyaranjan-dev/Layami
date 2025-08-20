import React from "react";

const Navbar = () => {
  return (
    <nav className="w-[60%] h-[60px] bg-gray-300 text-white backdrop-blur-[10px] bg-opacity-15 grid grid-cols-3 place-items-center ml-[20%] relative">
      <section>
        <h1>dhuun</h1>
      </section>
      <section>
        <input
          type="search"
          name="searchData"
          id="searchData"
          className="bg-transparent py-1 px-2 shadow-sm shadow-lime-500"
          autoFocus
        />
      </section>
      <section>👤</section>
    </nav>
  );
};

export default Navbar;
