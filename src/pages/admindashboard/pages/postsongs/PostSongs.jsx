import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const PostSongs = () => {
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(false)

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
      const res = await axios.post(
        "http://localhost:8001/admin/addsong",
        formdata,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(false)
      console.log(res);
      toast.success("song added")
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <input type="file" name="song" id="" onChange={handleInput} />
      <button onClick={sendSong} disabled={loading} className="bg-green-800">
        {loading ? "uploading..." : "add"}
      </button>

      {loading && <p>uploading...</p>}
    </div>
  );
};

export default PostSongs;
