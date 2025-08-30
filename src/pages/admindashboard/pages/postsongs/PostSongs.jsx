import axios from "axios";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

const PostSongs = () => {
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(false)
  const fileRef = useRef()

  const token = localStorage.getItem("token");
  console.log(token);

  const handleInput = (e) => {
    setSong(e.target.files[0]);
  };

  const sendSong = async (e) => {
    e.preventDefault();
    setLoading(true)
    if (!song) {
      toast.warning("choose a file")
    }

    const formdata = new FormData()
    formdata.append("songfile", song)

    try {
      const {data} = await axios.post(
        "http://localhost:8001/admin/addsong",
        formdata,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      
      if(data.message === "invalid token") return toast.warning("token expired. Login again")
      setLoading(false)
      setSong(null)
      toast.success("song added")
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <section className="backdrop-blur-sm h-[calc(100vh-4rem)] overflow-y-scroll   customScrollbar w-full p-2 md:p-4 lg:p-6 bg-transparent rounded-md pt-[6rem] lg:pt-[5rem] md:pt-[5rem] pb-[4rem] flex flex-col md:flex-1 lg:flex-auto items-center justify-center gap-5 duration-700 space-y-2 text-sm">
      <input
        type="file"
        name="song"
        id=""
        ref={fileRef}
        onChange={handleInput}
        className="bg-red-800 p-2 md:p-4 lg:p-6"
      />
      <button
        onClick={sendSong}
        disabled={loading}
        className="bg-green-800 p-2 md:p-4 lg:p-6"
      >
        {loading ? "uploading..." : "add"}
      </button>

      {/* {loading && <p>uploading...</p>} */}
    </section>
  );
};

export default PostSongs;
