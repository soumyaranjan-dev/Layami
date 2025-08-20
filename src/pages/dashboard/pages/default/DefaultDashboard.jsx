import React, { Fragment } from "react";

const DefaultDashboard = () => {
  const songs = [
    {
      id: 1,
      title: "Echoes of Time",
      artist: "Aria Nova",
      cover: "https://picsum.photos/200?random=1",
    },
    {
      id: 2,
      title: "Velvet Dreams",
      artist: "Luna Waves",
      cover: "https://picsum.photos/200?random=2",
    },
    {
      id: 3,
      title: "Midnight Bloom",
      artist: "Kai Orion",
      cover: "https://picsum.photos/200?random=3",
    },
    {
      id: 4,
      title: "Golden Haze",
      artist: "Solstice",
      cover: "https://picsum.photos/200?random=4",
    },
    {
      id: 5,
      title: "Neon Mirage",
      artist: "Vera Lux",
      cover: "https://picsum.photos/200?random=5",
    },
  ];

  return (
    <div className="backdrop-blur-sm h-screen w-full p-2 bg-transparent rounded-md pt-[100px] pb-[80px] flex flex-col justify-between gap-5 duration-700">
      <section className="h-[100px] w-full border border-green-700 rounded-lg bg-white/10 backdrop-blur-lg mt-2">
        <h1 className="relative bottom-7 text-black font-semibold">
          Quick Picks
        </h1>
        <section className="h-[90%] flex">
          {songs.map((song) => {
            return <Fragment key={song.id}>
              <section className="h-full w-[100px] bg-black">

              </section>
            </Fragment>;
          })}
        </section>
      </section>
      <section className="h-[100px] w-full border border-green-700 rounded-lg  backdrop-blur-lg mt-2 bg-white/10">
        <h1 className="relative bottom-7 text-black font-semibold">
          Trending Picks
        </h1>
        <section></section>
      </section>
      <section className="h-[100px] w-full border border-green-700 rounded-lg bg-white/10 backdrop-blur-lg mt-2">
        <h1 className="relative bottom-7  font-semibold">Liked Picks</h1>
        <section></section>
      </section>
      <section className="h-[100px] w-full border border-green-700 rounded-lg bg-white/10  backdrop-blur-lg mt-2">
        <h1 className="relative bottom-7  font-semibold">Artist Picks</h1>
        <section></section>
      </section>
    </div>
  );
};

export default DefaultDashboard;
