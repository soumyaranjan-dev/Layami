import React from 'react'

const Playsongui = ({ data }) => {
  const {cloudinaryUrl} = data
  // console.log(data)
  return (
    <section className="backdrop-blur-sm h-[calc(100vh-4rem)] overflow-y-scroll customScrollbar w-full p-2 md:p-4 lg:p-6 bg-transparent rounded-md pt-[6rem] lg:pt-[5rem] md:pt-[5rem] pb-[4rem] flex flex-col justify-between gap-5 duration-700 space-y-2 text-sm">
      <audio src={cloudinaryUrl}></audio>
      <h1>PlaySongUI</h1>
    </section>
  );
}

export default Playsongui