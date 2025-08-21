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

  const trendingSongs = [
    {
      _id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      cover:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      _id: 2,
      title: "Shape of You",
      artist: "Ed Sheeran",
      cover:
        "https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      _id: 3,
      title: "Levitating",
      artist: "Dua Lipa",
      cover:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      _id: 4,
      title: "Calm Down",
      artist: "Rema",
      cover:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      _id: 5,
      title: "Stay",
      artist: "The Kid LAROI & Justin Bieber",
      cover:
        "https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="backdrop-blur-sm h-[calc(100vh-4rem)] w-full p-2 md:p-4 lg:p-6 bg-transparent rounded-md pt-[5rem] md:pt-[5rem] lg:pt-[5rem] pb-[4rem] flex flex-col justify-between gap-5 duration-700 space-y-2 text-sm">
      {/* quick picks */}
      <section className="h-[9rem] md:[11rem] lg:[13rem] w-full border border-green-700 rounded-lg bg-white/10 backdrop-blur-lg ">
        <h1 className="relative bottom-7 font-semibold">Quick Picks</h1>
        <section className="h-[90%] w-full flex justify-between items-center overflow-scroll customScrollbar relative bottom-5 text-sm p-2 md:p-4 lg:p-6 space-x-4">
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

      {/* trending songs */}
      <section className="h-[9rem] w-full border border-green-700 rounded-lg  backdrop-blur-lg  bg-white/10">
        <h1 className="relative bottom-7 font-semibold">Trending Picks</h1>
        <section className="h-[90%] w-full flex justify-between items-center overflow-scroll customScrollbar relative bottom-5 text-sm p-2 space-x-4">
          {trendingSongs.map((song) => {
            return (
              <Fragment key={song._id}>
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

      {/* artist section */}
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
    </section>
  );
};

export default DefaultDashboard;
