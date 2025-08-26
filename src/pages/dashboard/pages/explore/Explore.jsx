import React, { Fragment } from "react";

const Explore = () => {
  const songs = [
    {
      _id: 1,
      text: "Top 10 Bollywood Songs",
      singerPic:
        "https://cdn.pixabay.com/photo/2019/10/25/18/09/music-4577592_1280.jpg",
    },
    {
      _id: 2,
      text: "Top 10 Hollywood Songs",
      singerPic:
        "https://cdn.pixabay.com/photo/2018/03/31/17/03/singer-3278603_1280.jpg",
    },
    {
      _id: 3,
      text: "Top 10 Tollywood Songs",
      singerPic:
        "https://cdn.pixabay.com/photo/2018/04/17/14/50/performance-3327674_1280.jpg",
    },
    {
      _id: 4,
      text: "Top 10 Tollywood Songs",
      singerPic:
        "https://cdn.pixabay.com/photo/2018/04/17/14/50/performance-3327674_1280.jpg",
    },
    {
      _id: 5,
      text: "Top 10 Tollywood Songs",
      singerPic:
        "https://cdn.pixabay.com/photo/2018/04/17/14/50/performance-3327674_1280.jpg",
    },
    {
      _id: 6,
      text: "Top 10 Tollywood Songs",
      singerPic:
        "https://cdn.pixabay.com/photo/2018/04/17/14/50/performance-3327674_1280.jpg",
    },
    {
      _id: 7,
      text: "Top 10 Tollywood Songs",
      singerPic:
        "https://cdn.pixabay.com/photo/2018/04/17/14/50/performance-3327674_1280.jpg",
    },
  ];
  return (
    <>
      <section
        className="h-[calc(100vh-4rem)] backdrop-blur-sm duration-700 pt-[6rem] overflow-y-scroll customScrollbar
      md:pt-[6rem] lg:pt-[6rem] p-2 md:p-4 lg:p-6 grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 text-sm md:text-base lg:text-lg"
      >
      <section>
        <input
          type="search"
          name="searchData"
          id="searchData"
          className="bg-black/10 p-2 shadow-sm border-2 border-lime-500 text-black rounded-lg outline-none"
          placeholder="search music ..."
          autoFocus
        />
      </section>
        {songs.map((song) => {
          return (
            <Fragment key={song._id}>
              <section
                className="h-[100px] md:h-[170px] lg:h-[200px] w-[80%] bg-white/5 backdrop-blur-lg border bg-cover rounded-lg p-2 md:p-4 lg:p-6"
                style={{ backgroundImage: `url(${song.singerPic})` }}
              >
                <section>
                  <h1>{song.text}</h1>
                </section>
              </section>
            </Fragment>
          );
        })}
      </section>
    </>
  );
};

export default Explore;
