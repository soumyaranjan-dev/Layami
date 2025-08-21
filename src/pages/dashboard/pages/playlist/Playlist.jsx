import React, { Fragment } from "react";

const Playlist = () => {
  const getMyBgColor = (name) => {
    const myFirst = name[0].toLowerCase()
    const myColors = {
      a: "bg-amber-700",
      b: "bg-blue-700",
      c: "bg-cyan-700",
      d: "bg-black",
      e: "bg-emerald-700",
      f: "bg-fuchsia-700",
      g: "bg-grey-700",
      h: "bg-black",
      i: "bg-indigo-700",
      j: "bg-black",
      k: "bg-black",
      l: "bg-lime-700",
      m: "bg-black",
      n: "bg-neutral-700",
      o: "bg-orange-700",
      p: "bg-purple-700",
      q: "bg-black",
      r: "bg-red-700",
      s: "bg-sky-700",
      t: "bg-teal-700",
      u: "bg-black",
      v: "bg-violet-700",
      w: "bg-white",
      x: "bg-black",
      y: "bg-yellow-700",
      z: "bg-zinc-700",
    };

    return myColors[myFirst]
  }

  const playlists = [
    {
      _id: 1,
      playlistName: "Lo-Fi",
      totalSongs: 112,
    },
    {
      _id: 2,
      playlistName: "Energy",
      totalSongs: 14,
    },
    {
      _id: 3,
      playlistName: "Phonk",
      totalSongs: 67,
    },
    {
      _id: 4,
      playlistName: "Phonk",
      totalSongs: 67,
    },
    {
      _id: 5,
      playlistName: "Phonk",
      totalSongs: 67,
    },
    {
      _id: 6,
      playlistName: "Phonk",
      totalSongs: 67,
    },
    {
      _id: 7,
      playlistName: "Phonk",
      totalSongs: 67,
    },
  ];
  return (
    <section className="h-[calc(100vh-4rem)] bg-black/10 duration-700 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-[6rem] md:pt-[6rem] lg:pt-[6rem] p-2 md:p-4 lg:p-6 gap-2 overflow-scroll customScrollbar text-sm md:text-base lg:text-lg border-none">
      {playlists?.map((playlist) => {
        return (
          <Fragment key={playlist._id}>
            <section
              className={`h-[9rem] ${getMyBgColor(
                playlist.playlistName
              )} rounded-lg p-4 border border-lime-500 backdrop-blur-md bg-opacity-40`}
            >
              <h1 className="font-semibold">{playlist.playlistName}</h1>
              <p>{playlist.totalSongs} songs</p>
            </section>
          </Fragment>
        );
      })}
    </section>
  );
};

export default Playlist;
