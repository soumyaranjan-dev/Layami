import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Playsongui = () => {
  const [playsong, setplaysong] = useState(false);
  const { state } = useLocation();
  const song = state?.song;

  console.log(playsong);
  return (
    <section className="backdrop-blur-sm h-[calc(100vh-4rem)] overflow-y-scroll customScrollbar w-full p-2 md:p-4 lg:p-6 bg-transparent rounded-md pt-[6rem] lg:pt-[5rem] md:pt-[5rem] pb-[4rem] flex flex-col justify-between gap-5 duration-700 space-y-2 text-sm">
      {song ? (
        <>
          <h1>PlaySongUI</h1>
          <button
            onClick={() => {
              setplaysong(!playsong);
            }}
          >
            play
          </button>
          <audio src={song.cloudinaryUrl} controls autoPlay={playsong}></audio>
        </>
      ) : (
        <h1>no song selected</h1>
      )}
    </section>
  );
};

export default Playsongui;
