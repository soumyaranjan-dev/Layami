import React from 'react'

const Allsongs = () => {
  return (
    <section className="backdrop-blur-sm h-[calc(100vh-4rem)] overflow-y-scroll customScrollbar w-full p-2 md:p-4 lg:p-6 bg-transparent rounded-md pt-[6rem] lg:pt-[5rem] md:pt-[5rem] pb-[4rem] flex flex-col justify-between gap-5 duration-700 space-y-2 text-sm">
      <section className="h-[9rem] md:h-[10rem] lg:h-[11rem] w-full border border-green-700 rounded-lg bg-white/10 backdrop-blur-lg">
              <h1 className="relative bottom-6 font-semibold">All Songs</h1>
              <section className="h-[90%] w-full flex justify-between md:justify-around lg:justify-evenly items-center overflow-scroll customScrollbar relative bottom-5 text-sm p-2 md:p-4 lg:p-6 space-x-4">
                {songs?.map((song) => {
                  return (
                    <Fragment key={song.songId}>
                      <section className="h-full min-w-[60px] md:min-w-[80px] lg:min-w-[100px] cursor-pointer" onClick={()=>handleSongSection(song)}>
                        <section>
                          <img
                            src={song.cover}
                            alt={song.title}
                            className="object-cover rounded-lg h-[4rem] md:h-[6rem] lg:h-[7rem]"
                          />
                        </section>
                        <section>
                          <h2 className="font-bold text-white">
                            {song.title?.split(" ")[0]}
                          </h2>
                        </section>
                      </section>
                    </Fragment>
                  );
                })}
              </section>
            </section>
    </section>
  );
}

export default Allsongs