import React from "react";

const DefaultDashboard = () => {
  return (
    <div className="backdrop-blur-sm h-screen w-full bg-transparent rounded-md">
      <section className="h-[100px] w-full">
        <h1>Quick Picks</h1>
      </section>
      <section className="h-[100px] w-full">
        <h1>Trending Picks</h1>
      </section>
      <section className="h-[100px] w-full">
        <h1>Liked Picks</h1>
      </section>
      <section className="h-[100px] w-full">
        <h1>Artist Picks</h1>
      </section>
    </div>
  );
};

export default DefaultDashboard;
