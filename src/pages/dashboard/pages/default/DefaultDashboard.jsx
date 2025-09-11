import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Playsongui from "../../../../components/playsongui/Playsongui";
import { useNavigate } from "react-router-dom";

const DefaultDashboard = () => {
  const [songs, getSongs] = useState([]);
  const navigate = useNavigate()

  const token = localStorage.getItem("token")

  useEffect(() => {
    async function fetchSongs() {
      try {
        const { data } = await axios.get("http://localhost:8001/user/songs", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        getSongs(data.songs);
      } catch (error) {
        console.log(error);
      }
    }
    fetchSongs();
  }, []);

  const artists = [
    {
      id: 1,
      name: "AR Rehman",
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

  const handleSongSection = (song) => {
    navigate("/playsong", {state: {song}})
  }
  
  return (
    <section className="backdrop-blur-sm h-[calc(100vh-4rem)] overflow-y-scroll customScrollbar w-full p-2 md:p-4 lg:p-6 bg-transparent rounded-md pt-[6rem] lg:pt-[5rem] md:pt-[5rem] pb-[4rem] flex flex-col justify-between gap-5 duration-700 space-y-2 text-sm"> 
      
      {/* quick picks */}
      <section className="h-[9rem] md:h-[10rem] lg:h-[11rem] w-full border border-green-700 rounded-lg bg-white/10 backdrop-blur-lg">
        <h1 className="relative bottom-6 font-semibold">Quick Trendy Picks</h1>
        <section className="h-[90%] w-full flex justify-between md:justify-around lg:justify-evenly items-center overflow-scroll customScrollbar relative bottom-5 text-sm p-2 md:p-4 lg:p-6 space-x-4">
          {songs?.map((song) => {
            return (
              <Fragment key={song.songId}>
                <section className="h-full min-w-[60px] md:min-w-[80px] lg:min-w-[100px] cursor-pointer flex flex-col justify-center items-center" onClick={()=>handleSongSection(song)}>
                  <section>
                    <img
                      src={song.cover}
                      alt={song.title}
                      className="object-cover rounded-lg h-[4rem] md:h-[6rem] lg:h-[7rem]"
                    />
                  </section>
                  <section>
                    <h2 className="font-bold text-white">
                      {song.title?.split("-")[0].toUpperCase()}
                    </h2>
                  </section>
                </section>
              </Fragment>
            );
          })}
        </section>
      </section>

      {/* trending songs */}
      <section className="h-[9rem] md:h-[10rem] lg:h-[11rem] w-full border border-green-700 rounded-lg bg-white/10 backdrop-blur-lg">
        <h1 className="relative bottom-7 font-semibold">Language Picks</h1>
        <section className="h-[90%] w-full flex justify-between md:justify-around lg:justify-evenly items-center overflow-scroll customScrollbar  text-sm p-2 space-x-4">
          {/* {trendingSongs.map((song) => {
            return (
              <Fragment key={song._id}>
                <section className="h-full min-w-[60px] md:min-w-[80px] lg:min-w-[100px]">
                  <section>
                    <img
                      src={song.cover}
                      alt={song.title}
                      className="object-cover rounded-lg h-[4rem] md:h-[6rem] lg:h-[7rem]"
                    />
                  </section>
                  <section>
                    <h2 className="font-bold text-white">
                      {song.title.split(" ")[0]}
                    </h2>
                  </section>
                  <section>
                    <p>{song.artist.split(" ")[0]}</p>
                  </section>
                </section>
              </Fragment>
            );
          })} */}
        </section>
      </section>

      {/* artist section */}
      <section className="h-[9rem] md:h-[10rem] lg:h-[11rem] w-full border border-green-700 rounded-lg bg-white/10 backdrop-blur-lg">
        <h1 className="relative bottom-7  font-semibold">Artist Picks</h1>
        <section className="h-[90%] w-full flex justify-between md:justify-around lg:justify-evenly items-center m-auto overflow-scroll customScrollbar relative bottom-5 text-sm p-2 md:p-4 lg:p-6 space-x-4">
          {artists.map((artist) => {
            return (
              <Fragment key={artist.id}>
                <section className="h-full min-w-[60px] md:min-w-[80px] lg:min-w-[100px] flex flex-col justify-center items-center cursor-pointer">
                  <section>
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="object-cover rounded-full h-[4rem] md:h-[6rem] lg:h-[7rem]"
                    />
                  </section>
                  <section>
                    <h2 className="font-bold text-white">
                      {artist.name}
                    </h2>
                  </section>
                  <section className="">
                    <p>{artist.genre}</p>
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
