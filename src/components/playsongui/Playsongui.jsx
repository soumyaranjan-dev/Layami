import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Playsongui = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const song = state?.song;

  return (
    <section className="backdrop-blur-sm h-screen overflow-y-scroll customScrollbar w-full p-2 md:p-4 lg:p-6 bg-transparent rounded-md pt-[6rem] lg:pt-[5rem] md:pt-[5rem] pb-[4rem] flex flex-col justify-center items-center gap-5 duration-700 space-y-2 text-sm">
      {song ? (
        <section className="h-[20rem] w-[20rem] bg-black rounded-lg flex flex-col justify-center items-center space-y-2 p-2">
          <img src={song.cover} alt="" width={100} height={100} />
          <h1>{song.title}</h1>
          <audio src={song.cloudinaryUrl} controls autoPlay></audio>
        </section>
      ) : (
        <h1>no song selected ...</h1>
      )}
      <p onClick={() => navigate("/dashboard")}>back</p>
    </section>
  );
};

export default Playsongui;
