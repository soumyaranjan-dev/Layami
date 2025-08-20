import React from "react";

const Explore = () => {
  return (
    <section className="backdrop-blur-sm duration-700">
      <input
        type="search"
        name="searchData"
        id="searchData"
        className="bg-transparent p-2 shadow-sm border-2 border-lime-500"
        autoFocus
      />
    </section>
  );
};

export default Explore;
