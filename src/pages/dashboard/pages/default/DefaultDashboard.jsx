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

  const artists = [
    {
      id: 1,
      name: "Aria Nova",
      genre: "Pop",
      image: "https://picsum.photos/200?random=11",
    },
    {
      id: 2,
      name: "Kai Orion",
      genre: "Indie Rock",
      image: "https://picsum.photos/200?random=12",
    },
    {
      id: 3,
      name: "Luna Waves",
      genre: "Synthwave",
      image: "https://picsum.photos/200?random=13",
    },
    {
      id: 4,
      name: "Vera Lux",
      genre: "R&B",
      image: "https://picsum.photos/200?random=14",
    },
    {
      id: 5,
      name: "Solstice",
      genre: "Lo-fi",
      image: "https://picsum.photos/200?random=15",
    },
  ];


  return (
    <div className="backdrop-blur-sm h-screen w-full p-2 bg-transparent rounded-md pt-[100px] pb-[80px] flex flex-col justify-between gap-5 duration-700 space-y-2">
      <section className="h-[9rem] w-full border border-green-700 rounded-lg bg-white/10 backdrop-blur-lg ">
        <h1 className="relative bottom-7 font-semibold">Quick Picks</h1>
        <section className="h-[90%] w-full flex justify-between items-center overflow-scroll customScrollbar relative bottom-5 text-sm p-2 space-x-4">
          {songs.map((song) => {
            return (
              <Fragment key={song.id}>
                <section className="h-full min-w-[60px]">
                  <section>
                    <img
                      src={song.cover}
                      alt={song.title}
                      className="object-cover rounded-lg h-[4rem]"
                    />
                  </section>
                  <section>
                    <h2 className="font-semibold text-black">
                      {song.title.split(" ")[0]}
                    </h2>
                  </section>
                  <section>
                    <p>{song.artist.split(" ")[0]}</p>
                  </section>
                </section>
              </Fragment>
            );
          })}
        </section>
      </section>
      <section className="h-[9rem] w-full border border-green-700 rounded-lg  backdrop-blur-lg  bg-white/10">
        <h1 className="relative bottom-7 font-semibold">Trending Picks</h1>
        <section className=" grid place-items-center">Empty list</section>
      </section>
      <section className="h-[9rem] w-full border border-green-700 rounded-lg bg-white/10  backdrop-blur-lg ">
        <h1 className="relative bottom-7  font-semibold">Artist Picks</h1>
        <section className="h-[90%] w-full flex justify-between items-center overflow-scroll customScrollbar relative bottom-5 text-sm p-2 space-x-4">
          {artists.map((artist) => {
            return (
              <Fragment key={artist.id}>
                <section className="h-full min-w-[60px]">
                  <section>
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="object-cover rounded-full hover:-translate-y-3 duration-700 h-[4rem]"
                    />
                  </section>
                  <section>
                    <h2 className="font-semibold text-black flex justify-center">
                      {artist.name.split(" ")[0]}
                    </h2>
                  </section>
                  <section className="flex justify-center">
                    <p>{artist.genre.split(" ")[0]}</p>
                  </section>
                </section>
              </Fragment>
            );
          })}
        </section>
      </section>
    </div>
  );
};

export default DefaultDashboard;
