import React from "react";

const Explore = () => {
  return (
    <section className="backdrop-blur-sm duration-700 pt-[5rem] pl-16">
      <input
        type="search"
        name="searchData"
        id="searchData"
        className="bg-transparent p-2 shadow-sm border-2 border-lime-500 text-black"
        autoFocus
      />
    </section>
  );
};

export default Explore;
